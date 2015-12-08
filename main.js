/**
 * Listens for the app launching then creates the window
 */
chrome.app.runtime.onLaunched.addListener(function() {
  //Get Size of Screen
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;

  //Create window to fill screen
  chrome.app.window.create('index.html', {
    id: "GameOnID",
    outerBounds: {
      width: screenWidth, 
      height: screenHeight
    }
  });
});
