function setVideoHeight() {
	var offset = $('.carousel-video').height() - $('.carousel-item').height()
	console.log(offset)
	$('.carousel-video').css({ bottom: offset });
}

$(document).ready(function(){
	$('.carousel-container').on('init', function() {
		$('.carousel-video').each(function() {
			this.play();
		})

		setVideoHeight();
	});

	$(window).resize(function() {
		setVideoHeight();
	});

	$('.carousel-container').slick({
		autoplay: true,
		accessibility: true,
		dots: true,
		autoplaySpeed: 5000
	});

	$('.carousel-container').on('afterChange', function() {
	
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