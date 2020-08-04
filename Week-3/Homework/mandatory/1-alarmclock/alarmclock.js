function setAlarm() {
  let inputValue = document.getElementById("alarmSet").value;
  let remainingTime = document.getElementById("timeRemaining");

  let min = Math.floor(inputValue / 60);
  let sec = inputValue % 60;

  let bgClock = document.querySelector(".centre");
  let colorForBg = ["blue", "red", "green", "pink"];

  let interval = setInterval(() => {
    remainingTime.textContent = `Time Remaining: ${min}:${sec}`;
    if (sec === 0) {
      sec = 60;
      min--;
    }
    sec--;

    if (min < 0) {
      playAlarm();
      clearInterval(interval);
      setInterval(() => {
        bgClock.style.backgroundColor =
          colorForBg[Math.floor(Math.random() * colorForBg.length)];
      }, 500);
    }
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
