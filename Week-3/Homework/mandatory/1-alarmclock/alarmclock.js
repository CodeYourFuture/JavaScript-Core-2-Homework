function setAlarm() {
  let stopBtn = document.getElementById("stop");
let setBtn = document.getElementById("set");

  let display = document.getElementById("timeRemaining");
  let inputNum = document.getElementById("alarmSet");
  inputNum = inputNum.value;

  let interval = setInterval (function(){
    if(inputNum >= 0) {

   display.textContent = `Time Remaining: 0${inputNum}:00` 
   inputNum--;
    }else{
      playAlarm();
    }
  }, 1000);
  stopBtn.addEventListener("click", function(){
    clearInterval(interval);
});

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
