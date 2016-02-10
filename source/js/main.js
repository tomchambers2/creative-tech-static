function setVideoHeight() {
	console.log('setting height')
	var offset = $('.showreel-container video').height() - $('.showreel-container').height()
	console.log(offset)
	$('#showreel-video').css({ bottom: offset, position: 'relative' });
}

$(document).ready(function(){
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