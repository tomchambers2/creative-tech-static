$(document).ready(function(){
	$('.carousel-container').slick({
		autoplay: true,
		accessibility: true,
		dots: true
	});

	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 200
	});
});