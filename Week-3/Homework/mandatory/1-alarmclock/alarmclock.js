
function setAlarm() {
  //Selectors
  let inputValue=document.getElementById("alarmSet"); 
  let timer=inputValue.value;
  let timeRemaining=document.querySelector("#timeRemaining");  


  let stopButton=document.querySelector("#stop");
  //eventListener


 let clock =setInterval(countDown,1000);

function countDown(){


if (timer<0){
  inputValue.value="";
  playAlarm();
}
else {
  if (timer>=10){
    timeRemaining.textContent=`time Remaining: 00:${timer}`;
    timer--;

  }
  else{
    timeRemaining.textContent=`time Remaining: 00:0${timer}`;
    timer--;
  }
}
}

stopButton.addEventListener("click", () => {
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
