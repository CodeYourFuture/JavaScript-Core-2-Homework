let myColors = ["yellow", "blue", "red"];
let randonNum = 0;
 
function setAlarm() {
  //SELECTORS
  let timerValue = document.getElementById('alarmSet');
  let timeRemaining = document.querySelector('#timeRemaining');
  let stop = document.querySelector('#stop');
  let timer =  timerValue.value;


    let startCounter = setInterval(countDown, 1000);

    //FUNCTION TO PRINT TIME REMAINING TO HTML
    function countDown(){
      
      if(timer < 0){
        playAlarm();
        timerValue.value = "";
      }else{
        if(timer >= 10){
          timeRemaining.textContent = `Time Remaining: 00:${timer}`;
          timer--;

        }else{
          timeRemaining.textContent = ` Time Remaining: 00:0${timer}`;
          timer--;
        }
       
      }
    } 

    


    //STOPS COUNTDOWN TIMER AND STOPS ALARM
    stop.addEventListener('click', () =>{
      clearInterval(startCounter);
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
