function setVideoHeight() {
	var offset = $('.carousel-video').height() - $('.carousel-item').height()
	console.log(offset)
	$('.carousel-video').css({ bottom: offset });
}

$(document).ready(function(){

	$('.carousel-container').on('init', function() {
		document.getElementById('book-awards-video').play();
		setVideoHeight();
	});

	$( window ).resize(function() {
		setVideoHeight();
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