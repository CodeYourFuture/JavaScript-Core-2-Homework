
function setAlarm(){
 
  let time=parseInt(input.value);
  if(time>0){
      if(time<10){
        time=`0${time}`;
      }
      else{
        time=`${time}`;
      }
     
    display.textContent=`Time Remaining:00:${time}`;
    time=parseInt(time);
    let timeOver=setTimeout(function(){
      document.querySelector("body").style.backgroundColor="red";
        playAlarm();
        clearInterval(timeOver);
        return;
     },time*1000);
    let countDown=setInterval(function(){
      time--;
      if(time<0){
        clearInterval(countDown);
        return;
      }
      display.textContent=`Time Remaining:00:${time}`;
    },1000);
  }
  else{
    //document.querySelector("#timeRemaining").textContent=`Time Remaining: 00:`2`;

  }
}

let display=document.querySelector("#timeRemaining");

display.style.fontSize="24px";
let input=document.querySelector("#alarmSet");
let btnSet=document.querySelector("#set");
btnSet.addEventListener("click",setAlarm());
let stopAlarm=document.querySelector("#stop");
//stopAlarm.className="centre";
stopAlarm.addEventListener("click",function(){
  pauseAlarm();
})
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
