let imgArray = [
    "images/pic1.jpg", "images/pic2.jpg",
    "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg",
    "images/pic6.jpg", "images/pic7.jpg"
];

let imgIndex = imgArray.length - 1;
let img = document.getElementById("images");
let reverseSlide;
let forwardSlide;
let imageIndex = document.getElementById("imageIndex");
let imgStop = document.getElementById("stop");

//to have a displayed image before clicking any button
img.src = imgArray[0];

let autoBack = document.getElementById("autoBack");
autoBack.addEventListener("click", () => {
    clearInterval(forwardSlide);
    reverseSlide = setInterval(() => {
        img.src = imgArray[imgIndex];
        imageIndex.textContent = imgIndex;
        imgIndex--;
        if (imgIndex < 0) {
            imgIndex = imgArray.length - 1;
        }
    },1000);
});
let autoForward = document.getElementById("autoForward");
autoForward.addEventListener("click", () => {
    clearInterval(reverseSlide);
    imgIndex = 0;
    forwardSlide = setInterval(() => {
        img.src = imgArray[imgIndex];
        imageIndex.textContent = imgIndex;
        imgIndex++;
        if (imgIndex > imgArray.length - 1) {
            imgIndex = 0;
        }
    }, 1000);
});

let back = document.getElementById("back");
back.addEventListener("click", () => {
    clearInterval(reverseSlide);
    clearInterval(forwardSlide);
    img.src = imgArray[imgIndex];
    imageIndex.textContent = imgIndex;
    if (imgIndex === 0){
        imgIndex = imgArray.length;
    }
    imgIndex--;
});


let forward = document.getElementById("forward");
forward.addEventListener("click", () => {
    clearInterval(reverseSlide);
    clearInterval(forwardSlide);
    img.src = imgArray[imgIndex];
    imageIndex.textContent = imgIndex;
    imgIndex++;
    if (imgIndex > imgArray.length-1) {
        imgIndex = 0;
    }
});


imgStop.addEventListener("click", () => {
    clearInterval(reverseSlide);
    clearInterval(forwardSlide);
}); 
 
