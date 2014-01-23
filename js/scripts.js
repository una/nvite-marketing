$(window).scroll(function() {
	var styledDiv = $('.iphone'),
		targetScroll = $('.iphone').position().top,
		currentScroll = $('html').scrollTop() || $('body').scrollTop();

	styledDiv.toggleClass('fixedPos', currentScroll >= targetScroll);
});

$(window).scroll(function() {
	var styledDiv = $('.iphone'),
		targetScroll = $('.iphone').position().top,
		currentScroll = $('html').scrollTop() || $('body').scrollTop() ;

	styledDiv.toggleClass('popOuts', currentScroll - 550 >= targetScroll);
});

$(window).scroll(function() {
	if ($('.iphone').offset().top >= 815) {
		$('.iphone').removeClass('fixedPos').css('top', 'auto');
	}
});