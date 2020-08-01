function printTime(time) {
  var timerEl = document.getElementById("timeRemaining");

  if (time < 600  &&  time % 60 >= 10) {
    timerEl.innerHTML = `Time Remaining: 0${Math.floor(time / 60)}:${time % 60}`;
  }
  else if (time < 600  &&  time % 60 < 10) {
    timerEl.innerHTML = `Time Remaining: 0${Math.floor(time / 60)}:0${time % 60}`;
  }
  else if (time % 60 >= 10) {
    timerEl.innerHTML = `Time Remaining: ${Math.floor(time / 60)}:${time % 60}`;
  }
  else {
    timerEl.innerHTML = `Time Remaining: ${Math.floor(time / 60)}:0${time % 60}`;
  }
}

function flashingBackground() {
  let redBackground = false;

  let flashingBackground = setInterval(function() {
    if(!redBackground) {
      document.body.style.backgroundColor = `#ff5555`;
      redBackground = true;
    }
    else {
      document.body.style.backgroundColor = "white";
      redBackground = false;
    }

    document.getElementById("stop").addEventListener("click", () => {
      document.body.style.backgroundColor = "white";
      clearInterval(flashingBackground);
    });
  }, 250);
}


var clockIsRunning = false;

function setAlarm() {
  if(clockIsRunning) {
    return
  }
  clockIsRunning = true;

  let time = document.getElementById("alarmSet").value;
  printTime(time);

  var countdown = setInterval(function() {
    printTime(--time);

    if(time === 0) {
      playAlarm();
      flashingBackground()
      clockIsRunning = false;
      clearInterval(countdown);
    }
  }, 1000);
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
