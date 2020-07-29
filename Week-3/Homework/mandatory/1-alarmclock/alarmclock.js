function setAlarm() {
  let inputId = document.getElementById("alarmSet").value;
  let timeH1El = document.getElementById("timeRemaining");
  
  let startAlarm = setInterval(() => {
    if (inputId === 0) {
      playAlarm();
      clearInterval(startAlarm);
    }
    getTime(inputId);
    timeH1El.textContent = `Time remaining: ${getTime(inputId)}`;
    inputId--;
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
