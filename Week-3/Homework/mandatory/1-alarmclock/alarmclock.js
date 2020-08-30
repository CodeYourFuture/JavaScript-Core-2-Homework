// digital clock https://www.youtube.com/watch?v=qvypCd2Vl4s
// timer https://www.youtube.com/watch?v=NJVJRFF-Y6U
// watch this >> timer https://www.youtube.com/watch?v=4_o3wO6aawg

function setAlarm() {
  let alarmSet = document.getElementById("alarmSet");
  let timer = alarmSet.value;
  let timeRemaining = document.getElementById("timeRemaining");
  let stopBtn = document.querySelector("#stop");

  let clock = setInterval(countDown, 1000);

  function countDown() {
    if (timer < 0) {
      alarmSet.value = "";
      clearInterval(clock);
      playAlarm();
    } else {
      if (timer >= 10) {
        timeRemaining.textContent = `Time Remaining: 00:${timer}`;
        timer--;
      }
    } else {
      timeRemaining.textContent = `Time Remaining: 00:0${timer}`;
      timer--;
    }
  }

  stopBtn.addEventListener("click", () => {
    clearInterval(clock);
    pauseAlarm();
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
