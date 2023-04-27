chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

chrome.action.onClicked.addListener(async (tab) => {
  const prevText = await chrome.action.getBadgeText({ tabId: tab.id });

  const newText = prevText === "ON" ? "OFF" : "ON";

  if (newText === "ON") {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: false },
      func: getIds,
    });
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id, allFrames: true },
      files: ["style.css"],
    });
  } else {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      func: removeIds,
    });
    await chrome.scripting.removeCSS({
      target: { tabId: tab.id, allFrames: true },
      files: ["style.css"],
    });
  }

  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: newText,
  });
});

function getIds() {
  console.log("Running script");

  let iframes = document.getElementsByTagName("iframe");

  const re1 = /entryid%2F(\w_\w{8})%2F/;
  const re2 = /entry_id=(\w_\w{8})/;
  const re3 = /\[playlistAPI.kpl0Id\]=(\w_\w{8})/;
  const re4 = /entryid\/(\w_\w{8})/;
  const URIre = /(\w_\w{8})/;

  for (frame of iframes) {
    // regex match with each iframe's src

    // Find speedgrader iframe
    if (frame.id === "speedgrader_iframe") {
      frame = frame.contentWindow.document.querySelector(".lti-embed");
    }

    // console.log(frame.contentWindow.document.body.innerHTML);
    let match1 = frame.src.match(re1);
    let match2 = frame.src.match(re2);
    let match3 = frame.src.match(re3);
    let match4 = frame.src.match(re4);
    let match5 = frame.baseURI.match(URIre);

    // Default value of no match incase no regex match is found for any variation
    let entryid = "not found";

    if (match1) {
      entryid = match1[1];
    } else if (match2) {
      entryid = match2[1];
    } else if (match3) {
      entryid = match3[1];
    } else if (match4) {
      entryid = match4[1];
    } else if (match5) {
      // matches with the baseURI instead (handle differently for MediaSpace)
      entryid = match5[1];
    }

    if (entryid !== "not found") {
      let toAppend = document.createElement("div");
      toAppend.classList.add("idInfo");
      toAppend.innerHTML = `<strong>ID:</strong> ${entryid}`;

      let button = document.createElement("button");
      button.classList.add("copyButton");
      button.innerHTML = "Copy";
      button.onclick = function copyId() {
        navigator.clipboard.writeText(entryid);
        button.innerHTML = "Copied!";
      };

      toAppend.appendChild(button);

      let parent = frame.parentNode;
      parent.classList.add("relative");
      parent.appendChild(toAppend);
    }
  }
}

function removeIds() {
  let infoElements = document.querySelectorAll(".idInfo");
  let relativeElements = document.querySelectorAll(".relative");

  console.log(infoElements);

  for (element of infoElements) {
    element.remove();
  }

  for (element of relativeElements) {
    element.classList.remove("relative");
  }
}
