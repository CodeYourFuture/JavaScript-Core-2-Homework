let alarmTimer;

function setAlarm() {
  let seconds = document.getElementById('alarmSet').value;
  const h1 = document.getElementById('timeRemaining');

  // call function without waiting 1000ms for the first call of setInterval
  updateTime(seconds, h1);

  // clear previous timer
  clearInterval(alarmTimer);

  alarmTimer = setInterval(() => {
    updateTime(seconds, h1);
  }, 1000);

  function updateTime(s, node) {
    if (s < 1) {
      clearInterval(alarmTimer);
      playAlarm();
    }
    const time = formatTime(s);
    node.textContent = `Time Remaining: ${time}`;
    seconds--;
  }

  function formatTime(seconds) {
    const s = seconds % 60;
    const m = Math.floor(seconds / 60);

    return ` ${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
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
