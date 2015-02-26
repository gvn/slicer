var elImg = $('img');

var elImgHeight = elImg.height();
var elImgWidth = elImg.width();

elImg.css({'margin-left': elImgWidth / -2});

var elSlices = $('<ul class="slices"></ul>').css({width:elImgWidth, margin:'auto'});

var sliceCount = 10;
var sliceHeight = Math.floor(elImgHeight / sliceCount);

$('body').append(elSlices);

for(i=0; i<sliceCount; i++) {
  var elSlice = $('<li></li>');

  var offset = Math.random() > 0.5 ? 0 : 1;

  // SETUP SLICES
  elSlice.css({
    height: sliceHeight, //+Math.random()*10
    width: elImgWidth,
    background: 'url(' + elImg[0].src + ') 0 -' + (i * sliceHeight) + 'px repeat-y'
  });

  elSlices.append(elSlice);

  // FILTER
  var direction = Math.random() > 0.5 ? -1 : 1;

  elSlice.css({
    'transform': 'skew(-' + Math.random() * 10 + 'deg) scale(' + (0.9 + Math.random() *0.2) + ') rotate(' + Math.random() * 2 * direction + 'deg)',
    opacity: Math.random()
  });
}
