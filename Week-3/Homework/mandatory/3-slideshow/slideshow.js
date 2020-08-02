// Write your code here
let arr = ["", "", etc, etc];
let i = arr.length - 1;
let autoBack = document.getElementById("autoBack");
autoBack.addEventListener("click", () => {
  let arrBack = setInterval(() => {
    document.getElementById("images").src = arr[i];
    i--;
    if (i < 0) {
      i = arr.length - 1;
    }
  }, 1000);
});

let autoForward = document.getElementById("autoForward");
autoBack.addEventListener("click", () => {
  let arrForward = setInterval(() => {
    document.getElementById("images").src = arr[i];
    i++;
    if (i === arr.length) {
      i = 0;
    }
  }, 1000);
});

let back = document.getElementById("back");
back.addEventListener("click", () => {
  setTimeout(() => {
    document.getElementById("images").src = arr[i];
    if (i < 0) {
      i = arr.length - 1;
    }
  }, 500);
  i--;
});

let forward = document.getElementById("forward");
forward.addEventListener("click", () => {
  setTimeout(() => {
    document.getElementById("images").src = arr[i];
    if (i === arr.length) {
      i = 0;
    }
  }, 500);
  i++;
});

let stopEl = document.getElementById("stop");
stopEl.addEventListener("click", () => {
    clearInterval(autoBack);
    clearInterval(autoForward);
})