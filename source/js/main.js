$(document).ready(function(){
	$('.carousel-container').slick({
		autoplay: true,
		accessibility: true,
		dots: true
	});
	
	$('.grid').imagesLoaded( function(){
		$('.grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: 300,
			gutter: 30,
			isFitWidth: true
		});
	});
});