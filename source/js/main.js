function setVideoHeight() {
	var offset = $('.carousel-video').height() - $('.carousel-item').height()
	console.log(offset)
	$('.carousel-video').css({ bottom: offset });
}

$(document).ready(function(){
	$('.carousel-container').on('init', function() {
		setVideoHeight();
	});

	$(window).resize(function() {
		setVideoHeight();
	});

	$('.carousel-container').slick({
		autoplay: true,
		accessibility: true,
		dots: true,
		autoplaySpeed: 1000
	});

	$('.carousel-container').on('afterChange', function(e, slick, index) {
		var video = $(this).find('*[data-slick-index='+index+'] video').get()[0];
		video.play();
		$('.carousel-container').slick('slickPause');
		video.addEventListener('ended', function() {
			$('.carousel-container').slick('slickPlay');
			video.pause();
		});
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