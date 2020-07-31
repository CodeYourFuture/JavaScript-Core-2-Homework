// Write your code here

let i = 0;
let imagesArr = [];
let time = 2000;

imagesArr[0]= "images/p-38-lightning.jpg";
imagesArr[1]= "images/pby-catalina.jpg";
imagesArr[2]= "images/pt-17-stearman.jpg";
imagesArr[3]= "images/t-6-texan.jpg";

////////////////////// - Callback function for addEventListener-//////////////////////
function changeTheImage (){
    if ( i < imagesArr.length - 1 ){
        i++;
    }else {
        i = 0;
    }
    document.querySelector(".slider").src = imagesArr[i];
}


function changeBackwards (){
    if ( i === 0){
        i= i + 3;
    }else if (i < imagesArr.length){
        i--;
    }
    document.querySelector(".slider").src = imagesArr[i];
}
let interval;
let interval2;

function changeTheImageAutoForward (){
   interval = setInterval(function(){
    if ( i < imagesArr.length - 1 ){
        i++;
    }else {
        i = 0;
    }
    document.querySelector(".slider").src = imagesArr[i];
     clearInterval(interval);
    }, 1000); 
   
}

function changeAutoBackwards (){
    interval2 = setInterval (function (){
    if ( i === 0){
        i= i + 3;
    }else if (i < imagesArr.length){
        i--;
    }
    document.querySelector(".slider").src = imagesArr[i];
    clearInterval(interval2);
    }, 1000)
    
}

//////////////////////// -Button events and Calling the functions-////////////////////


let forwardButton = document.querySelector(".forward-button");
forwardButton.addEventListener ("click", changeTheImage);

let backButton = document.querySelector(".back-button")
backButton.addEventListener ("click", changeBackwards);

let autoForwardButton = document.querySelector(".auto-forward-button");
autoForwardButton.addEventListener ("click", changeTheImageAutoForward);

let autoBackButton = document.querySelector(".auto-back-button");
autoBackButton.addEventListener("click",changeAutoBackwards )


let stopButton = document.querySelector(".stop-button")
stopButton.addEventListener ("click",clearInterval(interval,interval2));