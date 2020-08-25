function setAlarm() {
  let inputAlarmSet = document.getElementById("alarmSet").value;
  let titleTimeRemaining = document.getElementById("timeRemaining");

  let startAlarm = setInterval(() => {
    if (inputAlarmSet === 0) {
      //titleTimeRemaining.style.backgroundColor = "yellow";
      playAlarm();
      clearInterval(startAlarm);
    }

    getTime(inputAlarmSet);
    titleTimeRemaining.textContent = `Time remaining: ${getTime(inputAlarmSet)}`;
    inputAlarmSet--;
  }, 1000);

  if ((inputAlarmSet < 0)) {
    pauseAlarm();
  }
}

// This function return in format ( 00:00) minutes and seconds with if statements.
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

/* First try
// Step-1
function setAlarm(number) {
  let inputAlarmSet = document.getElementById("alarmSet");
  inputAlarmSet.textContent = number;
}

let alarmSetting = document.getElementById("set");
alarmSetting.addEventListener("click", setAlarm);

//Step-2
let titleTimeRemaining = document.getElementById("timeRemaining");
titleTimeRemaining.textContent = `Time Remaining: ${inputAlarmSet.textContent}`;

// Step-3 and Step4
  setInterval(function(){
    let audio = new Audio('alarmsound.mp3');
    let secondClock = inputAlarmSet.textContent;

    if (secondClock > 0){
      titleTimeRemaining.textContent = `Time Remaining: ${secondClock}`;
    } else if (secondClock === 0){
      audio.play();
      return `Alarm time is elapsed.`;
    }
  secondClock --;
  }, 1000)

// Step-4

*/


//////////////////////////////////////////////////////////////////////////////////////////////
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