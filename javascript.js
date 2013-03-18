/*
 Autemo Chopreel 2.2
 by Nadeem Sultan   www.nadeemsultan.tk
*/


$(document).ready(function(){

	//arrow click 

	var slider = $('#slider').css('overflow','hidden'),
		image = $('#slider img'),
		rightArrow = $('#right-arrow'),
		leftArrow = $('#left-arrow'),
		div = $('#slider div');

		rightArrow.click(function(){
			image.animate({left: -980},300);
			div.animate({left: -980},300);
			$(this).css('opacity','0');
			leftArrow.css('opacity','1');
		});

		leftArrow.click(function(){
			image.animate({left: 0},300);
			div.animate({left: 0},300);
			$(this).css('opacity','0');
			rightArrow.css('opacity','1');
		});


		//keyboard functionality

		$(document).keydown(function(key) {
	        switch(parseInt(key.which,10)) {
				case 37:
					image.animate({left: 0},300);
					div.animate({left: 0},300);
					leftArrow.css('opacity','0');
					rightArrow.css('opacity','1');
				break;
				case 39:
					image.animate({left: -980},300);
					div.animate({left: -980},300);
					rightArrow.css('opacity','0');
					leftArrow.css('opacity','1');
				break;
				default:
				break;
			}
		});


		// hover effects

		$('#slider li a').hover(function(){
			$(this).children('#slider div').css('transform','translate(0px,-115px)');
			$(this).children('#slider div').css('opacity','.8');
		},
			function(){
				div.css('transform','translate(0px,0px)');
				div.css('opacity','0');
			});	
});