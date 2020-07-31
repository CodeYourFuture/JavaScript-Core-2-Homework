let alarmTimer;
let blinkingScreenTimer;
let alarmRunning = false;
let seconds;
let h1;

function setAlarm() {
  // stop alarm if currently running
  stopAlarm();

  seconds = document.getElementById('alarmSet').value;
  h1 = document.getElementById('timeRemaining');
  alarmRunning = true;

  // can't set alarm for 0 or less seconds
  if (seconds < 1) return;

  // call function without waiting 1000ms for the first call of setInterval
  updateTime(seconds, h1);

  alarmTimer = setInterval(() => {
    updateTime(seconds, h1);
  }, 1000);
}

function stopAlarm() {
  alarmRunning = false;
  clearInterval(blinkingScreenTimer);
  clearInterval(alarmTimer);
  audio.pause();
  seconds = 0;
  document.body.style.backgroundColor = 'white';
  const h1 = document.getElementById('timeRemaining');
  h1.textContent = `Time Remaining: 00:00`;

  document.getElementById('pause').textContent = 'Pause Alarm';
}

function pauseAlarm() {
  // ignore pause button when timer is expired or not set
  if (seconds < 0 || seconds === undefined) return;

  const pauseBtn = document.getElementById('pause');

  pauseBtn.textContent = alarmRunning ? 'Resume Alarm' : 'Pause Alarm';

  if (alarmRunning) {
    // pause timer
    clearInterval(alarmTimer);
  } else {
    // start timer

    alarmTimer = setInterval(() => {
      updateTime(seconds, h1);
    }, 1000);
  }

  alarmRunning = !alarmRunning;
}

function updateTime(s, node) {
  const time = formatTime(s);
  node.textContent = `Time Remaining: ${time}`;
  seconds--;

  if (s < 1) {
    startAlarm();
    clearInterval(alarmTimer);
  }
}

function formatTime(seconds) {
  const s = seconds % 60;
  const m = Math.floor(seconds / 60);

  // 1min and 2s will be 01:02 instead of 1:2
  return ` ${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
}

function startAlarm() {
  let counter = 0;

  blinkingScreenTimer = setInterval(() => {
    playAlarm();
    document.body.style.backgroundColor = counter % 2 === 0 ? 'red' : 'white';
    counter++;
  }, 500);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio('alarmsound.mp3');

function setup() {
  document.getElementById('set').addEventListener('click', () => {
    setAlarm();
  });

  document.getElementById('stop').addEventListener('click', () => {
    stopAlarm();
  });

  document.getElementById('pause').addEventListener('click', () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

window.onload = setup;
