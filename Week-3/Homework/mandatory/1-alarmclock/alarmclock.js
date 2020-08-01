function setAlarm() {
	let timeSet = document.querySelector('#alarmSet').value;
	function countDown() {
		let minutes;
		let seconds;
		if (timeSet >= 10 && timeSet < 60) {
			(minutes = '00'), (seconds = '' + timeSet);
			document.querySelector('#timeRemaining').innerText = 'Time Remaining:00:' + timeSet;
		}
		if (timeSet < 10) {
			(minutes = '00'), (seconds = '0' + timeSet);
			document.querySelector('#timeRemaining').innerText = 'Time Remaining:00:0' + timeSet;
		} else if (timeSet > 59) {
			let testMinutes = Math.floor(timeSet / 60);
			let testSeconds = timeSet % 60;

			if (testMinutes < 10 && testSeconds < 10) {
				document.querySelector('#timeRemaining').innerText =
					'Time Remaining: 0' + Math.floor(timeSet / 60) + ':0' + timeSet % 60;
			}
			if (testMinutes < 10 && testSeconds > 10) {
				document.querySelector('#timeRemaining').innerText =
					'Time Remaining: 0' + Math.floor(timeSet / 60) + ':' + timeSet % 60;
			}
			if (testMinutes > 10 && testSeconds < 10) {
				document.querySelector('#timeRemaining').innerText =
					'Time Remaining:' + Math.floor(timeSet / 60) + ':0' + timeSet % 60;
			}
			if (testMinutes > 10 && testSeconds > 10) {
				document.querySelector('#timeRemaining').innerText =
					'Time Remaining:' + Math.floor(timeSet / 60) + ':' + timeSet % 60;
			}
		}

		if (timeSet === 0) {
			clearInterval(myaAlarm);
			playAlarm();
			document.body.style.backgroundColor = 'aqua';
		}
		timeSet--;
	}
}

// DO NOT EDIT BELOW HERE

var audio = new Audio('alarmsound.mp3');

function setup() {
	document.getElementById('set').addEventListener('click', () => {
		setAlarm();
	});

	document.getElementById('stop').addEventListener('click', () => {
		pauseAlarm();
	});
}

function playAlarm() {
	audio.play();
}

function pauseAlarm() {
	audio.pause();
}

window.onload = setup;
