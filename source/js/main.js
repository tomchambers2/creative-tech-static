// function setVideoHeight() {
// 	var offset = $('.carousel-video').height() - $('.carousel-item').height()
// 	console.log(offset)
// 	$('.carousel-video').css({ bottom: offset });
// }

$(document).ready(function(){
	// $(window).resize(function() {
	// 	setVideoHeight();
	// });

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