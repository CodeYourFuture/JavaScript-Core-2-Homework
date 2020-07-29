function setAlarm() {
// let Date = new Date();
  // let myClock = document.getElementById("set");
  let alarmSet = document.getElementById("alarmSet");
   remainingTime = document.getElementById("timeRemaining");
  let time = parseInt(alarmSet.value); 

  
  // 125seconds= 02:05
  
 let timeIn = setInterval(function(){
   let min = Math.floor(time/60);
   let sec = time-min * 60;
   
    remainingTime.textContent = ("Time Remaining: ") + (min>9?min:"0" +min) + ":" + (sec>9?sec:"0" + sec);
        
        if(time === 0){
          playAlarm();

       return clearInterval(timeIn);
          
        }
        time--;
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
