function setAlarm() {
  let alarmInputValue = document.querySelector("#alarmSet").value; //this is value in box
  let timeH1 = document.querySelector("#timeRemaining");
  let time = setInterval(() => {
    if (alarmInputValue === 0) {
      playAlarm();
      clearInterval(time);
    }
    updateScreen(alarmInputValue);
    timeH1.textContent = `Time remaining: ${updateScreen(alarmInputValue)}`;
    alarmInputValue--;
  }, 1000)
}
function updateScreen(timeRemaining) {
  let minutes;
  let seconds;
  if (timeRemaining > 60) {
    minutes = Math.floor(timeRemaining / 60);
    seconds = timeRemaining - minutes * 60;
  } else {
    minutes = 0;
    seconds = timeRemaining;
  }
  if (minutes < 10) {
    minutes = `0` + minutes;
  }
  if (seconds < 10) {
    seconds = `0` + seconds;
  }
  return `${minutes}:${seconds}`;
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