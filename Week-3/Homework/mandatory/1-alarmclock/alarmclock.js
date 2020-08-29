function setAlarm() {
  let getInputValue = document.querySelector("#alarmSet");
 // getInputValue.textContent = "hello";
  let value = getInputValue.value;
  console.log(value);
  let getTitle = document.querySelector("#timeRemaining");
  
  let timeRemaining = parseInt(value);
   if (timeRemaining>0) {
     if (timeRemaining<10){
       timeRemaining = "0"+value;
     }
     
     else {
       timeRemaining = value;
     }
     getTitle.innerHTML = "Time Remaining in seconds: 00:" + timeRemaining;
     
     let counter = setInterval(() => {
       timeRemaining--;
       if(timeRemaining<0){
         clearInterval(counter);
         return;
       }
       if(timeRemaining>10){
       getTitle.innerHTML = "Time Remaining in seconds: 00:" + timeRemaining;}
       else {
         getTitle.innerHTML = "Time Remaining in seconds: 00:0" + timeRemaining;
       }

       
     }, 1000);
    }
    
    let alarm = setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "lightpink";
      playAlarm();
      clearTimeout(alarm);
      return;
    }, timeRemaining*1000);

    
  

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
