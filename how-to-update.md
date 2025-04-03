# How to Update Extension (Developer)

## Resources
- The [Extension on the Chrome Web Store](https://chrome.google.com/webstore/detail/kaltura-information/hdfbfjhbcjjcpbbflhofiicpocglmpbn)
- [Google’s documentation](https://developer.chrome.com/docs/webstore/update/) on updating a Chrome extension.
- [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole) (under our accessibility@usu.edu Google account). This is where you can update to a new version of the extension. 

## Code Update
First, update everything in the code that you wish to update in the extension. This will often include the background.js file, any javascript files connected to html that you want to display, or .css files that you wish to update for a style change.

Be sure to update your version number in manifest.json. This is the version number that Google will recognize and update your version to on the web store. 
This number is made of three numbers separated by dots; for example, “1.2.5”.
- The right most number is a patch version. Increment this if you only patched something. 
- The middle number is a minor change. Increment this if you change minor functionality in the extension. 
- The leftmost number is a major change. Increment this if you change a large piece or functionality in the extension.

Remember that if you are changing the leftmost or middle number, you also need to reset any number(s) to the right of it to 0.

## Uploading to Developer Console (Publishing Changes)
After you have finished updating the code, including the version number, you will need to zip the entire directory into a single .zip file on your local machine. Then, in the developer console, you will go to Package > Upload New Package as shown below, and upload your .zip file.

When this step is complete, you should be able to submit to Google for review. This assumes that all permissions and descriptions for the extension were previously approved to publish the extension. You then have the option to auto-publish when the review is accepted or to manually publish the update to the store when the review is accepted.
