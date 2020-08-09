// Write your code here
let imgArray = [
  "images/Abraham_Lincolm.jpg",
  "images/Dalal_Lama.jpg",
  "images/Franklin_Roosevelt.jpg",
  "images/Nelson_Mandela.jpg",
  "images/Queen_Victoria.jpg",
  "images/Ronald_Reagan.jpg",
  "images/Winson_Churchill.jpg",
];

// selectors //
let autoForwardBtn = document.querySelector("#auto-forward");
let forwardBtn = document.querySelector("#forward");
let stopBtn = document.querySelector("#stop");
let backwardBtn = document.querySelector("#backward");
let autoBackwardBtn = document.querySelector("#auto-backward");

let i = 0;
document.getElementById("image-slider").src = imgArray[0];

// forward slide function //
function forward() {
  if (i === imgArray.length - 1) {
    i = 0;
  } else i++;
  document.getElementById("image-slider").src = imgArray[i];
}

// backward slide function //
function backward() {
  if (i === 0) {
    i = imgArray.length - 1;
  } else i--;
  document.getElementById("image-slider").src = imgArray[i];
}

// event listener for autoforward button //
autoForwardBtn.addEventListener("click", function () {
  let interval = setInterval(forward, 3000);
  // stop button eventlistener //
  stopBtn.addEventListener("click", function () {
    clearInterval(interval);
  });
});

// event listeners for forward button //
forwardBtn.addEventListener("click", forward);

// event listener for backward button //
backwardBtn.addEventListener("click", backward);

// event listener for autobackward button //
autoBackwardBtn.addEventListener("click", function () {
  let interval = setInterval(backward, 3000);
  // stop button eventlistener //
  stopBtn.addEventListener("click", function () {
    clearInterval(interval);
  });
});
