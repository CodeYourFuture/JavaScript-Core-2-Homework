function setAlarm() {

  let setAlarmbutton=document.querySelector("#set");
  let alarmInputValue=document.querySelector("#alarmSet").value;// this is value in box
  setAlarmbutton.addEventListener("click",alarmOn(alarmInputValue));
}

function alarmOn(inputValue)
{
  let time=setInterval(function()
  {
    if(inputValue===0)
    {
      clearInterval(time);
      playAlarm();
    }
    updateScreen(inputValue);
    inputValue--;
  },1000)
}

function updateScreen(newValue){
  let timeRemaining     =document.querySelector("#timeRemaining"); // here we are taking the tag by id
  textTime              =timeRemaining.textContent; //  refering to the tags textcontent so that we can update later.
  let replacementTime   = convertTime(newValue); // this is the variable which will contain the final value in minutes and seconds.
  textTime              = textTime.slice(0,15) + replacementTime; // updating the string to put it as textcontent on the page.
  
  timeRemaining.textContent =textTime;
}


// This will convert input time (initially in seconds) into minutes and seconds format.
function convertTime(inputValue) 
{
  var minutes=0;
  var seconds =0;

  if(inputValue<=60){
    minutes=0;
    seconds=inputValue;
  }
  else{
    minutes=Math.floor(inputValue/60);
    seconds=inputValue-Math.floor(minutes*60);
  }

  if(minutes<10){
    minutes="0"+minutes;
  }
  if(seconds<10){
    seconds="0"+seconds;
  }
  
  var finalValue = minutes+":"+seconds;
  return finalValue;
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
