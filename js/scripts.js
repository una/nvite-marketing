$(window).scroll(function() {
	var styledDiv = $('.iphone'),
		targetScroll = $('.iphone').position().top,
		currentScroll = $('html').scrollTop() || $('body').scrollTop();

	styledDiv.toggleClass('js-fixedPos', currentScroll >= targetScroll).addClass('js-screenSwitch');
	$('.ipad').toggleClass('js-screenSwitch', currentScroll >= targetScroll);
});

// $(window).scroll(function() {
// 	var styledDiv2 = $('.iphone'),
// 		targetScroll2 = $('.iphone').position().top,
// 		currentScroll2 = $('html').scrollTop() || $('body').scrollTop() ;

// 	styledDiv2.addClass('js-popOuts', (currentScroll2 - 800) >= targetScroll2);
// });

$(window).scroll(function() {
	if ($('.iphone').offset().top >= 815) {
		$('.iphone').removeClass('js-fixedPos').css('top', 'auto');
	}
});

