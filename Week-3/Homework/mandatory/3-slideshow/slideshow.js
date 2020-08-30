// Write your code here
var prev = document.getElementById("previous");
var next = document.getElementById("next");
var autoForward = document.getElementById("autoForward");
var autoBackward = document.getElementById("autoBackward");
var forwardInterval;
var backwardInterval;
var stopBtn = document.getElementById("stop");

var arr = ["img/cheesecake.jpg", "img/cupcakes.jpg", "img/gateaux.jpg", "img/tart.jpg"];

var i = 0;

//next btn
next.addEventListener("click", function() {
    i++;
    
    if (i === arr.length) {
        i = 0;
    }

    document.getElementById('image').src = arr[i];
})

//prev btn
prev.addEventListener("click", function() {
    i--;

    if (i === -1) {
        i = arr.length - 1;
        //document.getElementById('image').src = arr[i];
    }

    document.getElementById('image').src = arr[i];
})

//auto forward btn
function autoFor() {
    clearInterval(backwardInterval);
    if (i === arr.length) {
        i = 0;
    }
    document.getElementById('image').src = arr[i];
    i++;
}

autoForward.addEventListener("click", function() {
    forwardInterval = setInterval(autoFor, 3000);
})

//auto backward btn
function autoBack() {
    clearInterval(forwardInterval);
    if (i < 0) {
        i = arr.length - 1;
    }
    document.getElementById('image').src = arr[i];
    i--;
}

autoBackward.addEventListener("click", () => {
    backwardInterval = setInterval(autoBack, 3000);
})

//stop btn
stopBtn.addEventListener("click", () => {
    clearInterval(forwardInterval);
    clearInterval(backwardInterval);
}) 