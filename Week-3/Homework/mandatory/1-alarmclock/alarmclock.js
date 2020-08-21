let isPause = false;
let onPause = false;
let timeLeft = 0;
let countDown;
let onAlarm = false;

function flashBack() {
  let alarmColors = ["red", "white"];
  let count = 0;
  let isAlarm = setInterval(() => {
    count++;
    document.body.style.backgroundColor = alarmColors[count % 2];
  }, 200);
  document.getElementById("stop").addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    onAlarm = false;
    return clearInterval(isAlarm);
  });
}

function setAlarm() {
  let alarmSet = document.getElementById("alarmSet");
  if (!onAlarm) {
    if (!isPause) {
      timeLeft = Number(alarmSet.value);
      if (timeLeft > 0) {
        let setButton = document.getElementById("set");
        setButton.textContent = "Pause";
        isPause = true;
        let timeRemaining = document.getElementById("timeRemaining");
        countDown = setInterval(function () {
          let minLeft = Math.floor(timeLeft / 60);
          let secLeft = timeLeft % 60;
          timeRemaining.textContent = `Time Remaining: ${("0" + minLeft).slice(
            -2
          )}:${("0" + secLeft).slice(-2)}`;
          if (!timeLeft) {
            playAlarm();
            flashBack();
            isPause = false;
            onAlarm = true;
            setButton.textContent = "Set Alarm";
            return clearInterval(countDown);
          }
          timeLeft--;
        }, 1000);
      }
    } else {
      if (!onPause) {
        let setButton = document.getElementById("set");
        setButton.textContent = "Continue";
        onPause = true;
        return clearInterval(countDown);
      } else {
        let setButton = document.getElementById("set");
        setButton.textContent = "Pause";
        onPause = false;
        let timeRemaining = document.getElementById("timeRemaining");
        countDown = setInterval(function () {
          let minLeft = Math.floor(timeLeft / 60);
          let secLeft = timeLeft % 60;
          timeRemaining.textContent = `Time Remaining: ${("0" + minLeft).slice(
            -2
          )}:${("0" + secLeft).slice(-2)}`;
          if (!timeLeft) {
            playAlarm();
            flashBack();
            isPause = false;
            onAlarm = true;
            setButton.textContent = "Set Alarm";
            return clearInterval(countDown);
          }
          timeLeft--;
        }, 1000);
      }
    }
  }
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
