// USAGE: phantomjs render.js INPUT_IMAGE OUTPUT_IMAGE

var system = require('system');
var args = system.args;
var page = require('webpage').create();

var imgInput = args[1];
var imgOutput = args[2];

page.open('http://localhost:31337', function (status) {
  // Inject image into DOM
  page.evaluate(function (imagePath) {
    $('img').attr('src', imagePath);
  }, imgInput);

  // Ensure image has dimensions before slicing
  var imageReadyCheck = setInterval(function (arguments) {
    var imgWidth = page.evaluate(function () {
      return $('img').width()
    });

    if (imgWidth) {
      clearInterval(imageReadyCheck);
      sliceAndRender();
    }
  }, 1);

  function sliceAndRender () {
    page.viewportSize = page.evaluate(function () {
      return {
        width: document.querySelector('img').width,
        height: document.querySelector('img').height
      }
    });

    page.evaluate(function () {
      slice();
    });

    page.render(imgOutput);
    phantom.exit();
  }
});
