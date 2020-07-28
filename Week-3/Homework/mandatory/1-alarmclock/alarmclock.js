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
    var audio = new Audio('alarmsound.mp3');
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
