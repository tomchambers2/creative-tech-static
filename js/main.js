$(document).ready(function(){
	$('.carousel-container').on('init', function() {
		document.getElementById('book-awards-video').play()
	});

	$('.carousel-container').slick({
		autoplay: true,
		accessibility: true,
		dots: true,
		autoplaySpeed: 9000
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