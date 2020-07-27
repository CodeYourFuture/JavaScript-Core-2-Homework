function setAlarm() {
  let setAlarmBtn = document.getElementById("set");
  let timeTitle = document.getElementById("timeRemaining");
  let inputField = document.getElementById("alarmSet")
  setAlarmBtn.addEventListener('click', () => {
    timeTitle.textContent =  inputField.value;
    console.log(timeTitle);
  })
}
  

  console.log(setAlarmBtn);
  console.log(inputField);
  console.log(timeTitle);

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
