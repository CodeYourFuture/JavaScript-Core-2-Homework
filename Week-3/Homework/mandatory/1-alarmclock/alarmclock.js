function setAlarm() {
  let alarmCounter = document.querySelector("#timeRemaining");
  let bodyClass = document.querySelector(".centre");
  setAlarmTime = document.querySelector("#alarmSet");
  let inputValue = setAlarmTime.value;

  let minutes = Math.floor(inputValue / 60);
  let seconds = inputValue % 60;

  let interval = setInterval(() => {
    if (minutes > 0 && seconds === 0) {
      minutes--;
      seconds = 59;
    }

    if (seconds === 0) {
      clearInterval(interval);
      audio.play();
      bodyClass.style.backgroundColor = "#B5AEA8";
    }

    alarmCounter.textContent = `Time Remaining: ${minutes} : ${seconds}`;
    seconds--;
  }, 1000);

  audio.pause();
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
