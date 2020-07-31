let isPause = false;
let timeLeft = 0;
let countDown;
function setAlarm() {
  let alarmSet = document.getElementById("alarmSet");
  
  if (!isPause) {
    timeLeft = Number(alarmSet.value);
    if (timeLeft > 0) {
      let setButton = document.getElementById("set");
      setButton.textContent = "Pause";
      isPause = true;
      let timeRemaining = document.getElementById("timeRemaining");
      countDown = setInterval(function () {
        let minLeft = Math.floor(timeLeft / 60);
        let secLeft = timeLeft % 60;
        timeRemaining.textContent = `Time Remaining: ${("0" + minLeft).slice(-2)}:${("0" + secLeft).slice(-2)}`;
        //let timeover = 
        if (!timeLeft) {
          playAlarm();
          return clearInterval(countDown);
        }
        timeLeft--;
      }, 1000);
    }
  } else{
  alert(" Wow!")  ;
return clearInterval(countDown);
  }
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
