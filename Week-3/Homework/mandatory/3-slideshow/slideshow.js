// Write your code here
let imgArray = [
  "images/cake1.jpg",
  "images/cake2.jpg",
  "images/cake3.jpg",
  "images/cake4.jpg",
];
let i = 0;
let imgArray = [];
let time = 2000;
function changeTheImage() {
  console.log("hey man");
  if (i < imgArray.length 
  ]- 1) {
    i++;
  } else {
    i = 0;
  }
  document.querySelector(".image-set").src = imgArray[i];
}
function changeBackwards() {
  if (i === 0) {
    i = i + 3;
  } else if (i < imgArray.length) {
    i--;
  }
  document.querySelector(".image-set").src = imgArray[i];
}
function changeTheImageAutoForward() {
  setInterval(function () {
    if (i === 3) {
      document.querySelector(".image-set").src = imgArray[3];
    } else if (i < imgArray.length) {
      i++;
    }
    document.querySelector(".image-set").src = imgArray[i];
  }, 1000);
}
let forward = document.querySelector("#forward");
forward.addEventListener("click", changeTheImage);

let backward = document.querySelector("#backward");
backward.addEventListener("click", changeBackwards);
/*
let stopButton = document.querySelector(“.stop-button”)
stopButton.addEventListener (“click”,); */
let autoForward = document.querySelector("#auto-forward");
autoForward.addEventListener("click", changeTheImageAutoForward);
