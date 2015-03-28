const BLUR = true;
const BLUR_MAX = 2;
const SLICE_COUNT = 10;
const SKEW_MAX = 10;
const ROTATE_MAX = 2;
const ADD_BORDER = true;
const BORDER_COLOR = 'rgba(69,69,69,0.2)';
const ALLOW_REPEATS = false;
const REPEAT_PROBABILITY = 0.2; // float: 0 (never) -> 1 (always)

var elImg = $('img');

var imgHeight = elImg.height();
var imgWidth = elImg.width();

var elSlices = $('<ul class="slices"></ul>').css({width: imgWidth});
var sliceHeight = Math.floor(imgHeight / SLICE_COUNT);

$('body').append(elSlices);

// Create slices: -------------------------------------------------------------

for(i = 0; i < SLICE_COUNT; i++) {
  var elSlice = $('<li></li>');
  var sliceToShow = i;

  if (ALLOW_REPEATS) {
    sliceToShow = Math.random() > REPEAT_PROBABILITY ? i : i - 1;
  }

  elSlice.css({
    height: sliceHeight,
    width: imgWidth,
    background: 'url(' + elImg[0].src + ') 0 -' + (sliceToShow * sliceHeight) + 'px repeat-y'
  });

  // Jitter slices:

  var direction = Math.random() > 0.5 ? -1 : 1;

  elSlice.css({
    '-webkit-transform':
      'skewX(-' + (direction * Math.random() * SKEW_MAX) + 'deg) ' +
      'scale(' + (0.9 + Math.random() * 0.2) + ') ' +
      'rotate(' + (direction * Math.random() * ROTATE_MAX) + 'deg)',
    opacity: Math.random()
  });

  if (BLUR) {
    elSlice.css({
      '-webkit-filter': 'blur(' + Math.floor(Math.random() * BLUR_MAX) + 'px)'
    });
  }

  if (ADD_BORDER) {
    elSlice.css({
      'border-top': '1px solid ' + BORDER_COLOR,
      'border-bottom': '1px solid ' + BORDER_COLOR
    });
  }

  elSlices.append(elSlice);
}
