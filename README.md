# Kaltura Information Extension

Kaltura Information is a Chrome extension that displays info about Kaltura media players in a page. This extension is meant to be used within Canvas by Instructure to find the Entry ID's of embedded Kaltura Media. Finding the id manually can be a somewhat tedious process. This product was created to simplify the process of getting this id for those who need it.

Install [here](https://chrome.google.com/webstore/detail/kaltura-information/hdfbfjhbcjjcpbbflhofiicpocglmpbn).

## External Libraries Used

None

## External Services Used

1. [Chrome Web Store](https://chrome.google.com/webstore/category/extensions): Used to host extension.

## Process

1. Icon is clicked.
2. Set text to on.
3. Run function `getIds` on page.
4. Get all iframes on page.
5. for each frame do the following.
   1. Check if it is a speedgrader frame.
   2. Check if it is a video quiz frame.
   3. Attempt to match frame's src to a regex to find the video ID.
   4. If an ID is found.
      1. Add copy button to iframe.

## Version

### 2.2.0

#### Major

- Update to support video quizzes.

#### Minor

- Add copy button reset after click.
- Update some code syntax.
