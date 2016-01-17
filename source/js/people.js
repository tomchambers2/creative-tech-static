$(document).on('ready', function() {
	$('section.people').height($('section.people').height())

	$('.person-text-container.left').append($('.person-text.tom').clone().addClass('swapped').removeClass('original'));
	$('.person-text-container.right').append($('.person-text.theo').clone().addClass('swapped').removeClass('original'));

	var loaded = [];
	$('#theo-video').on('canplay', function() {
		loaded.push(true);
		doLoad();
	});

	$('#tom-video').on('canplay', function() {
		loaded.push(true);
		doLoad();
	});

	function doLoad() {
		if (loaded.length === 2) {
			document.getElementById('theo-video').play();
			document.getElementById('tom-video').play();
		}		
	}

	var stages = [
		{ time: 0, action: 'load' },
		{ time: 12, action: 'fade' },
		{ time: 14, action: 'swap' },
		{ time: 26, action: 'fade' }
	];

	var currentStages = stages.slice(0);

	function getAction(currentTime) {
		if (!currentStages.length && Math.round(currentTime) === 0) {
			console.log('reset')
			currentStages = stages.slice(0);;
		}
		for (var i = 0; i < currentStages.length; i++) {
			if (currentStages[i].time <= currentTime) {
				var action = currentStages[i].action;
				currentStages.splice(i, 1);
				console.log(action, currentTime)
				return action;
			}
		};
	}

	function performAction(action) {
		if (action === 'load') {
			$('.person-text.swapped').hide();
			$('.person-text.original').fadeIn(1000);
		} else if (action === 'fade') {
			$('.person-text.swapped').fadeOut(1000);
			$('.person-text.original').fadeOut(1000);
		} else if (action === 'swap') {
			$('.person-text.swapped').fadeIn(1000);
		}
	}

	$('#theo-video').on('timeupdate', function() {
		var action = getAction(this.currentTime);
		performAction(action);
	})
})