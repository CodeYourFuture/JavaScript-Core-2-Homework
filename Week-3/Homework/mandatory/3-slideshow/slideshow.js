let imgs = [
  { src: "pict/flower.jpg", alt: "flower" },
  { src: "pict/fireStation.jpg", alt: "fire station" },
  { src: "pict/hotel.jpg", alt: "hotel" },
  { src: "pict/highroad.jpg", alt: "highroad" },
];
let div = document.createElement("div");
div.style.border = "solid green 15px";
document.body.appendChild(div);
let img = document.createElement("img");

img.style.height = "100%";
img.style.width = "100%";
div.style.width = "70%";

div.appendChild(img);
var count = 0;
img.src = imgs[count].src;
img.alt = imgs[count].alt;

let btnAutoBack = document.createElement("button");
let btnBack = document.createElement("button");
let btnStop = document.createElement("button");
let btnForward = document.createElement("button");
let btnAutoForward = document.createElement("button");

let btnHolder = document.createElement("div");
document.body.appendChild(btnHolder);
btnHolder.style.width = "70%";

btnAutoBack.style.height = "50px";
btnAutoBack.style.width = "20%";
btnBack.style.height = "50px";
btnBack.style.width = "20%";
btnStop.style.height = "50px";
btnStop.style.width = "20%";
btnForward.style.width = "20%";
btnForward.style.height = "50px";
btnAutoForward.style.height = "50px";
btnAutoForward.style.width = "20%";

document.body.style.display = "flex";
document.body.style.flexWrap = "wrap";
document.body.style.justifyContent = "center";


btnAutoBack.innerText = "Auto back";
btnBack.innerText = "Back";
btnStop.innerText = "Stop";
btnForward.innerText = "Forward";
btnAutoForward.innerText = "Auto forward";

btnHolder.appendChild(btnAutoBack);
btnHolder.appendChild(btnBack);
btnHolder.appendChild(btnStop);
btnHolder.appendChild(btnForward);
btnHolder.appendChild(btnAutoForward);



let auto = false;

function moveImg(forward = true) {
  if (forward) {
    if (count < imgs.length - 1) {
      count++;
    } else {
      count = 0;
    }
  } else {
    if (!count) {
      count = imgs.length;
    }
    count--;
  }
  img.src = imgs[count].src;
  img.alt = imgs[count].alt;
}

btnBack.addEventListener("click", () => !auto ? moveImg(false): NaN);

btnForward.addEventListener("click",() => !auto ? moveImg(): NaN);

let interval;

btnAutoForward.addEventListener("click", () => {
  if(!auto)
  {auto = true;
  interval = setInterval(moveImg, 1000);}
});
btnAutoBack.addEventListener("click", () => {
  if(!auto)
  {auto = true;
  interval = setInterval(() => moveImg(false), 1000);}
});

function stop(){
  auto = false;
  clearInterval(interval);
}

btnStop.addEventListener("click", stop);
