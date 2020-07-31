function setAlarm () {
  let timeRem = document.querySelector ('#timeRemaining');
  let inputTxt = document.querySelector ('#alarmSet').value;
  let intTxt = parseInt (inputTxt);
  let interv;
  let mins;
  let sec;
  let decCheck = Math.floor (intTxt);

  if (
    inputTxt === '' ||
    typeof intTxt != 'number' ||
    inputTxt > decCheck ||
    inputTxt <= 0
  ) {
    timeRem.textContent = 'Please Enter posive number > than 0';
    document.querySelector ('#alarmSet').value = '';
  } else if (intTxt > 0 && intTxt < 10) {
    timeRem.textContent = `Time Remaining: 00:0${inputTxt}`;
    interv = setInterval (function () {
      if (inputTxt > 0)
        timeRem.textContent = `Time Remaining: 00:0${--inputTxt}`;
      if (inputTxt === 0) {
        timeRem.textContent = `Time Remaining: 00:00`;
        playAlarm ();
        clearInterval (interv);
      }
    }, 1000);
  }

  if (intTxt >= 10 && intTxt < 60) {
    timeRem.textContent = `Time Remaining: 00:${inputTxt}`;
    interv = setInterval (function () {
      if (inputTxt > 10) {
        timeRem.textContent = `Time Remaining: 00:${--inputTxt}`;
      } else {
        timeRem.textContent = `Time Remaining: 00:0${--inputTxt}`;
      }
      if (inputTxt === 0) {
        timeRem.textContent = `Time Remaining: 00:00`;
        playAlarm ();
        clearInterval (interv);
      }
    }, 1000);
  }

  if (intTxt >= 60 && intTxt < 600) {
    mins = Math.floor (intTxt / 60);
    sec = intTxt - mins * 60;
    timeRem.textContent = `Time Remaining: 0${mins}:0${sec}`;
    interv = setInterval (function () {
      if (sec > 0 && sec < 10) {
        if (sec > 0) timeRem.textContent = `Time Remaining: 0${mins}:0${--sec}`;
        if (sec === 0) {
          if (mins > 0) {
            mins--;
            sec += 60;
          }
          timeRem.textContent = `Time Remaining: 0${mins}:0${sec}`;
        }
      }
      if (sec >= 10 && sec <= 60) {
        timeRem.textContent = `Time Remaining: 0${mins}:${--sec}`;
      }
    }, 1000);
  }

  if (intTxt > 600 && intTxt < 6000) {
    mins = Math.floor (intTxt / 60);
    sec = intTxt - mins * 60;
    interv = setInterval (function () {
      if (sec > 0 && sec < 10) {
        if (sec > 0) timeRem.textContent = `Time Remaining: ${mins}:0${--sec}`;
        if (sec === 0) {
          if (mins > 0) {
            mins--;
            sec += 60;
          }
          timeRem.textContent = `Time Remaining: 0${mins}:0${sec}`;
        }
      }
      if (sec >= 10 && sec <= 60) {
        timeRem.textContent = `Time Remaining: 0${mins}:${--sec}`;
      }
    }, 1000);
  }

  if (intTxt > 6000) {
    timeRem.textContent = ` Sorry Its Is Too Big, Follow Up Our Next Version 😉`;
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio ('alarmsound.mp3');

function setup () {
  document.getElementById ('set').addEventListener ('click', () => {
    setAlarm ();
  });

  document.getElementById ('stop').addEventListener ('click', () => {
    pauseAlarm ();
  });
}

function playAlarm () {
  audio.play ();
}

function pauseAlarm () {
  audio.pause ();
}

window.onload = setup;
