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

btnAutoBack.classList.add("btnClass");
btnBack.classList.add("btnClass");
btnStop.classList.add("btnClass");
btnForward.classList.add("btnClass");
btnAutoForward.classList.add("btnClass");

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

btnBack.addEventListener("click", () => {
  if (count) {
    count--;
    img.src = imgs[count].src;
    img.alt = imgs[count].alt;
  }
});
btnForward.addEventListener("click", () => {
  if (count<imgs.length-1) {
    count++;
    img.src = imgs[count].src;
    img.alt = imgs[count].alt;
  }
});