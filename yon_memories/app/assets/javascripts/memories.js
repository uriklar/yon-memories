var count, isRunning, selectedIndex = 0, interval;

function init(memoryCount) {
	count = memoryCount;
	isRunning = true;
	$('#stop').click(stopInterval);
  $('#continue').click(restartInterval);
  restartInterval();
}

function restartInterval() {
	if (interval) {
		return;
	}

	$('.memory.stopped').removeClass('stopped');
	interval = window.setInterval(function () {
		$($('.memory')[selectedIndex]).removeClass('selected');
		selectedIndex = selectedIndex < count - 1 ? selectedIndex + 1 : 0;
		$($('.memory')[selectedIndex]).addClass('selected');
	}, 500);
}


function stopInterval() {
	window.clearInterval(interval);
	$('.memory.selected').addClass('stopped');
	interval = null;
}



