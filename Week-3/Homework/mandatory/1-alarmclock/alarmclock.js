let timeSet = 0;
function setAlarm() {
  let setAlarmBtn = document.getElementById("set");
  let timeTitle = document.querySelector(".time");
  let inputField = document.getElementById("alarmSet");
  console.log(setAlarmBtn);
  timeSet = inputField.value;

  timeTitle.textContent = second2Minutes(timeSet);

  let alarmSet = setInterval(function () {
    if (timeSet <= 0) {
      clearInterval(alarmSet);
      playAlarm();
      inputField.value = "";
    } else {
      timeSet--;
      timeTitle.textContent = second2Minutes(timeSet);
    }
  }, 1000);
}
function second2Minutes(seconds) {
  let remainingSecs = seconds % 60;
  let minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (remainingSecs < 10) {
    remainingSecs = "0" + remainingSecs;
  }
  return `${minutes}:${remainingSecs}`;
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
