function setAlarm() {
  let inputTime = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining"); 

  function timeFormat(time) {
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

  let alarm = setInterval(() => {
    if (inputTime === 0) {
      playAlarm();
      clearInterval(alarm);
    }
    timeRemaining.textContent = `Time remaining: ${timeFormat(inputTime)}`;
    inputTime--;
  }, 1000);
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
