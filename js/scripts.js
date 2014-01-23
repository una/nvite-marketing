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

$(document).ready(function(){
	$('.iphone__screen--1').show();

	$('.popout-l-1').on('hover', function(){
		$('.iphone__screen--2').show();
	});

	$('.popout-r-1').on('hover', function(){
		$('.iphone__screen--3').show();
	});

	$('.popout-r-2').on('hover', function(){
		$('.iphone__screen--4').show();
	});
});

$(window).scroll(function() {
	if ($('.iphone').offset().top >= 815) {
		$('.iphone').removeClass('fixedPos').css('top', 'auto');
	}
});