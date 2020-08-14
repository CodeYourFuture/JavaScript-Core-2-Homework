


function setAlarm() {
  //Access to the DOM
  let timeRemaining = document.getElementById('timeRemaining');
  let alarmSet = document.getElementById('alarmSet');

  let inputNumber = alarmSet.value;
  let minutes = Math.floor(inputNumber/60);
  let seconds = inputNumber % 60;
    
  let interval = setInterval(() => {
    if (minutes > 0 && seconds === 0) {
      minutes--;
      seconds = 59;
    }

    if (seconds === 0) {
      clearInterval(interval);
      audio.play();
      let bgClock = document.body.style.backgroundColor = "magenta";
      bgClock.reset();
    }

    timeRemaining.innerHTML = 'Time Remaining: ' + minutes + ':' + seconds;
    seconds--;
  }, 1000);

  audio.pause();
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
