// digital clock https://www.youtube.com/watch?v=qvypCd2Vl4s
// timer https://www.youtube.com/watch?v=NJVJRFF-Y6U
// watch this >> timer https://www.youtube.com/watch?v=4_o3wO6aawg

function setAlarm() {
  let alarmSet = document.getElementById('alarmSet');
  let timeRemaining = document.getElementById('timeRemaining');
  if alarmSet ==== 
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
