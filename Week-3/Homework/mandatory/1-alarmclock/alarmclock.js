let alarmTimer;
function setAlarm() {
  var alarmSet = document.getElementById("alarmSet").value;
  var timeRemaining = document.getElementById("timeRemaining");
  updateTime(alarmSet, timeRemaining);

  // clear previous timer
  clearInterval(alarmTimer);

  alarmTimer = setInterval(() => {
    updateTime(alarmSet, timeRemaining);
  }, 1000);

  function updateTime(sec, node) {
    if (sec < 1) {
      clearInterval(alarmTimer);
      playAlarm();
    }
    const time = formatTime(sec);
    node.textContent = `Time Remaining: ${time}`;
    alarmSet--;
  }

  function formatTime(seconds) {
    const s = alarmSet % 60;
    const m = Math.floor(alarmSet / 60);

    return ` ${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
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
