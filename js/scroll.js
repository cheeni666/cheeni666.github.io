$(document).ready(function(){
	$('a.js-scroll-trigger').click(function() {
		var dest = $(this).attr('href');
		$("html, body").animate({ scrollTop: $(dest).offset().top }, 1000);
	});

    $('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	});
});