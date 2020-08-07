//set interval
/* 1. When the `Set Alarm` button is clicked, get the value of the input field
2. When you have the input field value, set the title to the correct value
3. Work out how to update the `Time Remaining` title every second
4. When the remaining time left is 0, play the alarm sound
 */




 

function setAlarm() {
let inputSet = document.getElementById("alarmSet");
let inputValue = parseInt(inputSet.value);
let title = document.getElementById("timeRemaining");

let countDown = setInterval(function() {
let minutes = Math.floor(inputValue / 60);
let seconds = inputValue % 60;
title.textContent = ("Time Remaining: ") + (minutes>9?minutes:"0" +minutes) + ":" + (seconds>9?seconds:"0" + seconds);

             if(inputValue === 0){
               playAlarm();

           return clearInterval(countDown);

             }
             inputValue--;
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
