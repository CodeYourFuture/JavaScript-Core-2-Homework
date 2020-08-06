/**
 # Make an Alarm Clock

In this folder you will find the basic setup of an alarm clock.

You should only change code in the `alarmclock.js` file.

## How the clock should work


/*
Every one second the title should count down by one.

When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can make the sound happen by using `playAlarm()`.

You can stop the alarm sound by pressing the `Stop Alarm` button.

## Need Help?

Only read this section if you really need to! It's good to work this out for yourself.

### Hints

- Have you tried looking at the `setInterval` function?

### Steps to complete

1. When the `Set Alarm` button is clicked, get the value of the input field
2. When you have the input field value, set the title to the correct value
3. Work out how to update the `Time Remaining` title every second
4. When the remaining time left is 0, play the alarm sound

## Extra Tasks

If you have time and want to do more why not try

- Make the background change color when the alarm clock finishes
  - Try making the background flash!
- Could you add `pause` functionality so that the count down stops and then you restart it later?
 */
/*
When you click the `Set Alarm` button the counter at the top of the screen should change to the number you entered in the `input` field. For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.
*/
function setAlarm(alarm) {
	let inputAlarm = document.querySelector("#alarmSet").value;
	let remainingTime = document.querySelector("#timeRemaining");
	let startAlarm = setInterval(() => {
		if (inputAlarm === 0) {
			playAlarm();
			clearInterval(startAlarm);
		}
		getTime(inputAlarm);
		remainingTime.textContent = `Time remaining: ${getTime(inputAlarm)}`;
		inputAlarm--;
	}, 1000);
}
function getTime(time) {
	let minutes;
	let seconds;
	if (time > 60) {
		minutes = Math.floor(time / 60);
		seconds = time - minutes * 60;
	} else {
		minutes = 0;
		seconds = time;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return `${minutes}:${seconds}`;
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
	document.getElementById("set").addEventListener("click", () => {
		setAlarm();
	});

	document.getElementById("stop").addEventListener("click", () => {
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
