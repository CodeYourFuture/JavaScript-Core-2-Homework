// Write your code here
let imageArray = [
  "img/unsplash-photo-1.jpg",
  "img/unsplash-photo-2.jpg",
  "img/unsplash-photo-3.jpg",
  "img/unsplash-photo-4.jpg",
  "img/unsplash-photo-5.jpg",
  "img/unsplash-photo-6.jpg",
  "img/unsplash-photo-7.jpg",
];
//buttons
let prevBtn = document.querySelector("#previousBtn");
let nextBtn = document.querySelector("#nextBtn");
let runForward = document.querySelector("#cueForward");
let runBackward = document.querySelector("#cueBackward");
let stopBtn = document.querySelector("#stopBtn");
let stopRunForward;
let stopRunBackward;
//counter
let counter = 0;
let reverseCounter = 0;
//button listeners
// Next Button
nextBtn.addEventListener("click", function () {
  if (counter > imageArray.length - 2) {
    counter = -1;
  }
  counter++;
  let image = document.querySelector("img");
  image.src = imageArray[counter];
  reverseCounter = counter;
  console.log("forward counter value");
  console.log(counter);
});
// Previous Button
prevBtn.addEventListener("click", function () {
  if (reverseCounter <= 0) {
    reverseCounter = imageArray.length;
  }
  reverseCounter--;
  let image = document.querySelector("img");
  image.src = imageArray[reverseCounter];
  // counter = reverseCounter;
  console.log("reverse counter value");
  console.log(reverseCounter);
});
runForward.addEventListener("click", function () {
  clearInterval(stopRunBackward);
  stopRunForward = setInterval(function () {
    if (counter > imageArray.length - 2) {
      counter = -1;
    }
    counter++;
    let image = document.querySelector("img");
    image.src = imageArray[counter];
    reverseCounter = counter;
    console.log("runForward");
    console.log(counter);
  }, 1000);
});
runBackward.addEventListener("click", function () {
  clearInterval(stopRunForward);
  stopRunBackward = setInterval(function () {
    if (reverseCounter <= 0) {
      reverseCounter = imageArray.length;
    }
    reverseCounter--;
    let image = document.querySelector("img");
    image.src = imageArray[reverseCounter];
    // counter = reverseCounter;
    console.log("runBackward");
    console.log(reverseCounter);
  }, 1000);
});
stopBtn.addEventListener("click", function () {
  clearInterval(stopRunForward);
  clearInterval(stopRunBackward);
});
