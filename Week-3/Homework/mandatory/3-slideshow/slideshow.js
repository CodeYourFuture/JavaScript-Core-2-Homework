// Write your code here

let i = 0;
let imagesArr = [];
const TIME = 1000;
let interval;

imagesArr[0]= "images/p-38-lightning.jpg";
imagesArr[1]= "images/pby-catalina.jpg";
imagesArr[2]= "images/pt-17-stearman.jpg";
imagesArr[3]= "images/t-6-texan.jpg";

////////////////////// - Callback function for addEventListener-//////////////////////
function moveImageForward (){
    if ( i < imagesArr.length - 1 ){
        i++;
    }else {
        i = 0;
    }
    document.querySelector(".slider").src = imagesArr[i]
}

function moveImageBackward (){
    if ( i === 0){
        i= imagesArr.length;
    }
    i--;
    document.querySelector(".slider").src = imagesArr[i];
}

function changeForward (){
    stopTheSlide();
    moveImageForward();
}

function changeBackwards (){
    stopTheSlide();
    moveImageBackward();
}

function changeTheImageAutoForward (){
    stopTheSlide();
    interval = setInterval(moveImageForward, TIME); 

}

function changeTheImageAutoBackwards (){
    stopTheSlide();
    interval = setInterval(moveImageBackward, TIME);
}

function stopTheSlide (){
    clearInterval(interval);
}

//////////////////////// -Button events and Calling the functions-////////////////////


let forwardButton = document.querySelector(".forward-button");
forwardButton.addEventListener ("click", changeForward);

let backButton = document.querySelector(".back-button")
backButton.addEventListener ("click", changeBackwards);

let autoForwardButton = document.querySelector(".auto-forward-button");
autoForwardButton.addEventListener ("click", changeTheImageAutoForward);

let autoBackButton = document.querySelector(".auto-back-button");
autoBackButton.addEventListener("click",changeTheImageAutoBackwards )

let stopButton = document.querySelector(".stop-button")
stopButton.addEventListener ("click",stopTheSlide);