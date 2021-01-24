// Write your code here
let imgArray = [
  "images/Abraham_Lincolm.jpg", // index 0 //
  "images/Dalal_Lama.jpg",
  "images/Franklin_Roosevelt.jpg",
  "images/Nelson_Mandela.jpg",
  "images/Queen_Victoria.jpg",
  "images/Ronald_Reagan.jpg",
  "images/Winson_Churchill.jpg",
  "images/Fidel_Castro.jpg",
  "images/Adolf_Hitler.jpg",
  "images/Angela_Merkel.jpg",
  "images/Vladimir_Putin.jpg"
];

// selectors //
let autoForwardBtn = document.querySelector("#auto-forward");
let forwardBtn = document.querySelector("#forward");
let stopBtn = document.querySelector("#stop");
let backwardBtn = document.querySelector("#backward");
let autoBackwardBtn = document.querySelector("#auto-backward");

let i = 0;
document.getElementById("image-slider").src = imgArray[0];

// backward slide function //
function backward() {
  if (i === 0) {
    i = imgArray.length - 1;
  } else i--;
  document.getElementById("image-slider").src = imgArray[i];
}

// forward slide function //
function forward() {
 if (i === imgArray.length - 1) {
    i = 0;
  } else i++;
  document.getElementById("image-slider").src = imgArray[i];
}

// event listener for backward button //
backwardBtn.addEventListener("click", backward);

// event listeners for forward button //
forwardBtn.addEventListener("click", forward);

// event listener for autoBackward button //
autoBackwardBtn.addEventListener("click", function () {
  let interval = setInterval(backward, 4000);
  // stop button eventListener //
  stopBtn.addEventListener("click", function () {
    clearInterval(interval);
  });
});

// event listener for autoForward button //
autoForwardBtn.addEventListener("click", function () {
  let interval = setInterval(forward, 4000);
  // stop button eventListener //
  stopBtn.addEventListener("click", function () {
    clearInterval(interval);
  });
});