function setAlarm() {
let Date = new Date();
  let myClock = document.getElementById("set");
  let alarmSet = document.getElementById("alarmSet").innerHTML = Date.getSeconds ;
  let remainingTime = document.getElementById("timeRemaining");
 
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
