# Kaltura Information Extension

Kaltura Information is a Chrome extension that displays info about Kaltura media players in a page. This extension is meant to be used within Canvas by Instructure to find the Entry ID's of embedded Kaltura Media. Finding the id manually can be a somewhat tedious process. This product was created to simplify the process of getting this id for those who need it.

This project is meant to be used as an extension in the Chrome browser. You can find it on the [Chrome web store](https://chrome.google.com/webstore/detail/kaltura-information/hdfbfjhbcjjcpbbflhofiicpocglmpbn). To use the extension after installing, click on the extension. The extension will then show the ID for each video on the page. Click the extension again to remove the ids.

Most of the functional code is written in the background.js file. When the extension is clicked, this file runs a function called `getIds()` that finds the iframe for each video and pulls the video id from its information. It then displays the id on the screeen over the video. Along with the id is also a button that the user can click to copy the id to their clipboard. When the extension is clicked again the diplayed ids are removed. This process is done by running a function called `removeIds()`.
