var image;
var auto;
var index = 0;
var autoSwitchedOn = false;

function moveBack() {
    if(index <= 0) {
        index = imageFilenames.length - 1;
        image.src = "images/" + imageFilenames[index];
    }
    else {
        image.src = "images/" + imageFilenames[--index];
    }
}

function moveForward() {
    if(index >= imageFilenames.length - 1) {
        index = 0;
        image.src = "images/" + imageFilenames[index];
    }
    else {
        image.src = "images/" + imageFilenames[++index];
    }
}

function autoMoveBack() {
    if(autoSwitchedOn) {
        return;
    }
    else {
        autoSwitchedOn = true;
        moveBack();
        auto = setInterval(moveBack, 5000);
    }
}

function autoMoveForward() {
    if(autoSwitchedOn) {
        return;
    }
    else {
        autoSwitchedOn = true;
        moveForward();
        auto = setInterval(moveForward, 5000);
    }
}

function stopAutoMovement() {
    autoSwitchedOn = false;
    clearInterval(auto);
}

function setup() {
    image =  document.getElementById("slide-image");
    image.src = "images/" + imageFilenames[index];   

    document.getElementById("back").addEventListener("click", moveBack);
    document.getElementById("forward").addEventListener("click", moveForward);
    document.getElementById("auto-back").addEventListener("click", autoMoveBack);
    document.getElementById("auto-forward").addEventListener("click",  autoMoveForward);
    document.getElementById("stop").addEventListener("click", stopAutoMovement);
}

window.onload = setup;

/* IMAGE DATABASE: */

var imageFilenames = [
    "pexels-photo-236606.jpeg",
    "pexels-photo-1056251.jpeg",
    "pexels-photo-1543793.jpeg",
    "pexels-photo-1787414.jpeg",
    "pexels-photo-2558605.jpeg",
    "pexels-photo-2643812.jpeg",
    "pexels-photo-2870353.jpeg"
];