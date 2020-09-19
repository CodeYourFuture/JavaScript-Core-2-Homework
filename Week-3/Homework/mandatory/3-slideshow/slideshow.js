// Write your code here
// Write your code here
let imgArray = ["image/1.jpeg", "image/2.jpg", "image/3.jpg", "image/4.jpg", "image/5.jpg", "image/6.png"];
let prevBtn = document.querySelector("#previousBtn");
let nextBtn = document.querySelector("#nextBtn");
let forwardBtn = document.querySelector("#forkWard");
let staopBtn = document.querySelector("#stopBtn");
let backwardBtn = document.querySelector("#backWard");
let stopRunForward;
let stopRunBackward;


let counter = 0;
let backCounter = imgArray.length - 1;

nextBtn.addEventListener("click", function() {
    if (counter > imgArray.length - 2) {
        counter = -1;
    }
    counter++;
    let image = document.querySelector("img");
    image.src= imgArray[counter];
    counter = backCounter;
    console.log(counter);
});

prevBtn.addEventListener("click", function(){
    if (backCounter <= 0) {
        backCounter = imgArray.length -1;
    }
    backCounter--;
    let image = document.querySelector("img");
    image.src = imgArray[backCounter];
    console.log(backCounter);
});
forwardBtn.addEventListener("click", function () {
    clearInterval(stopRunBackward);
    stopRunForward = setInterval(function () {
      if (counter > imageArray.length - 2) {
        counter = -1;
      }
      counter++;
      let image = document.querySelector("img");
      image.src = imageArray[counter];
      backCounter = counter;
      console.log(counter);
    }, 1000);
  });
  backwardBtn.addEventListener("click", function () {
    clearInterval(stopRunForward);
    stopRunBackward = setInterval(function () {
      if (backCounter <= 0) {
        backCounter = imageArray.length;
      }
      backCounter--;
      let image = document.querySelector("img");
      image.src = imageArray[backCounter];
      console.log(backCounter);
    }, 1000);
  });
  stopBtn.addEventListener("click", function () {
    clearInterval(stopRunForward);
    clearInterval(stopRunBackward);
  });