let countdownTimer = 0, timerPaused = false;
let flashTimer = 0;
let alarmed = false;
let screenToggle = true;
let minutes = 0, seconds = 0;

const flashScreen = () => {
  flashTimer = setInterval(() => {
    let body = document.querySelector("body");
    if (screenToggle) {
      body.style.backgroundColor = 'red';
    }
    else {
      body.style.backgroundColor = 'white';
    }
    screenToggle = !screenToggle;
  }, 700);
}
const warningMsg = msg => {
  let errorMsg = document.querySelector("#error-msg");
  errorMsg.innerHTML = msg;
  $("#errorModal").modal("show");
}
const startCountdown = () => {
  countdownTimer = setInterval(() => {
    let mm = "", ss = "";
    let timer = document.querySelector("#timeRemaining");

    if (seconds > 0) {
      seconds--;
    }
    else {
      if (minutes > 0) {
        seconds = 59;
        minutes--;
      }
      else {
        clearInterval(countdownTimer);
        countdownTimer = 0;
        flashScreen();
        playAlarm();
        alarmed = true;
      }
    }
    mm = "" + minutes;
    ss = "" + seconds;
    if (minutes < 10) { mm = "0" + minutes; }
    if (seconds < 10) { ss = "0" + seconds; }
    timer.textContent = `Time Remaining: ${mm}:${ss}`;
  }, 1000);
};

const addStopEvtListener = () => {
  let stop = document.querySelector("#stop");
  stop.addEventListener('click', () => {
    if (alarmed) {
      pauseAlarm();
      clearInterval(flashTimer);
      let body = document.querySelector("body");
      body.style.backgroundColor = 'white';
      clearFlashTimer = 0;
      alarmed = false;
      timerPaused = false;
    }
  });
}

function setAlarm() {
  if (countdownTimer) return;

  if ((minutes === 0) && (seconds === 0) && (timerPaused === false)) {                                   // Can we reuse existing minutes or seconds
    let countdown = document.querySelector("#alarmSet");
    if (countdown.value === "" || parseInt(countdown.value) <= 0) {
      warningMsg("Invalid time format.<br> Enter seconds [1 - 3599].");
      return;
    }

    let value = parseInt(countdown.value, 10); // don't forget the second param
    let hours = Math.floor(value / 3600);
    if (hours) {
      warningMsg("Invalid time format.<br> Too many seconds.");
      let errorMsg = document.querySelector("#error-msg");
      return;
    }

    minutes = Math.floor((value - (hours * 3600)) / 60);
    seconds = value - (hours * 3600) - (minutes * 60);
    addStopEvtListener();
  }

  let timer = document.querySelector("#timeRemaining");
  let mm = "" + minutes, ss = "" + seconds;

  if (minutes < 10) { mm = "0" + minutes; }
  if (seconds < 10) { ss = "0" + seconds; }
  timer.textContent = `Time Remaining: ${mm}:${ss}`;
  startCountdown(minutes, seconds);
}

const pauseTimer = () => {
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = 0;
    timerPaused = true;
  }
};


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });

  document.getElementById("pause").addEventListener("click", () => {
    pauseTimer();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
