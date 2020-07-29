

function setAlarm() {
  let inputValue = document.getElementById('alarmSet').value;
  let heading = document.getElementById('timeRemaining');
  let minutes = Math.floor(inputValue / 60);
  let seconds = (inputValue % 60);
  
  let colors = ['#FCF2F1','#E0C1E0','#A88C9B','#A86DB1','#7649CA','#FCF2F1','#E0C1E0','#A88C9B'];
  
  let interval = setInterval(() => {
    
    heading.textContent = `Time Remaining: ${minutes}:${seconds}`;
    if(seconds === 0) {
      seconds = 60;
      minutes--;
    }
    
    seconds--;

    if(minutes < 0 ){
      playAlarm(); 
      clearInterval(interval);
      
      setInterval(() => {
        let random = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[random];
      }, 500 )
      
    } 
    
  }, 1000)
  
  
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
