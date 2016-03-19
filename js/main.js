function setVideoHeight() {
	var offset = $('.showreel-container video').height() - $('.showreel-container').height()
	$('#showreel-video').css({ bottom: offset, position: 'relative' });
}

$(document).ready(function(){
	$('.read-more').click(function() {
		$('.more-text').slideToggle();
		$('.read-more .off').toggle();
		$('.read-more .on').toggle();
	});

	if (window.screen.width < 843) {
		return;
	};	

	$(window).resize(function() {
		setVideoHeight();
	});
	setVideoHeight();

	$(window).on('scroll', function() {
		var video = document.getElementById('showreel-video');
		if ($(window).scrollTop() >= $(window).height()) {
			video.pause();	
		} else {
			video.play();
		}
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