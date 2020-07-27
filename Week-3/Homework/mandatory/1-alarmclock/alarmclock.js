let isPause = false;
function setAlarm() {
  let alarmSet = document.getElementById("alarmSet");
  
  if (!isPause) {
    let timeLeft = Number(alarmSet.value);
    if (timeLeft > 0) {
      let setButton = document.getElementById("set");
      setButton.textContent = "Pause";
      isPause = true;
      let timeRemaining = document.getElementById("timeRemaining");
      let countDown = setInterval(function () {
        let minLeft = Math.floor(timeLeft / 60);
        let secLeft = timeLeft % 60;
        timeRemaining.textContent = `Time Remaining: ${minLeft}:${secLeft}`;
        let timeover = timeLeft--;
        if (!timeover) {
          playAlarm();
          return clearInterval(countDown);
        }
      }, 1000);
    }
  } else{

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
