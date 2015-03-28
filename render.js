var page = require('webpage').create();

page.open('http://localhost:31337', function (status) {
  var viewportSize = page.evaluate(function () {
    return {
      width: document.querySelector('img').width,
      height: document.querySelector('img').height
    }
  });

  page.viewportSize = viewportSize;
  page.render('rendered/test.png');

  phantom.exit();
});
