$(document).ready(function() {

	var elImg = $('img');
	var elImgHeight = elImg.height();
	var elImgWidth = elImg.width();

	elImg.css({'margin-left':elImgWidth/-2});
	
	var elSlices = $('<ul class="slices"></ul>').css({width:elImgWidth,margin:'auto'});
	
	var sliceHeight = 50;
	var sliceCount = Math.floor(elImgHeight / sliceHeight);

	$('body').append(elSlices);
	
	for(i=0;i<sliceCount;i++) {
		var elSlice = $('<li></li>');
		
		var offset;
		Math.random() > 0.5 ? offset = 0 : offset = 1;
		
		// SETUP SLICES
		elSlice.css({
			height:sliceHeight+Math.random()*10,
			width:elImgWidth,
			background:'url('+elImg[0].src+') 0 -'+(i)*(sliceHeight+i)+'px repeat-y'
		});
		
		elSlices.append(elSlice);
		
		// FILTER
		var direction = Math.random();
		direction > 0.5 ? direction = -1 : direction = 1;
		
		elSlice.css({
			'-webkit-transform':'skew(-'+Math.random()*10+'deg) scale('+(0.9+Math.random()*0.2)+') rotate('+Math.random()*2*direction+'deg)',
			opacity:Math.random()+0.5
		});
	}
	
	
	
	
	function budge() {
		$('ul.slices li').each(function(){
			var direction = Math.random();
			direction > 0.5 ? direction = -1 : direction = 1;
			
			$(this).css({
				'-webkit-transform':'skew(-'+Math.random()*10*direction+'deg) scale('+(0.9+Math.random()*0.2)+') rotate('+Math.random()*2*direction+'deg)',
				opacity:Math.random()+0.5
			});
		});
	}
	
	// budge();
	// setInterval(budge,3000);

});