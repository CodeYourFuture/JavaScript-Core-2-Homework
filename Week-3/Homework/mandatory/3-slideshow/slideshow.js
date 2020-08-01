// Write your code here


let image = document.querySelector('.image');
let forwardButton = document.querySelector('.arrow-right');
let backwardButton = document.querySelector('.arrow-left');

let autoForwardButton = document.querySelector('.btn-forward');
let autoBackwardButton = document.querySelector('.btn-backward');

let timerInput = document.getElementById('timer-input');

let imageNumber = [1,2,3,4];
let index = 0;
let interval; 
let duration = 2500;  //default time in seconds between images 

//////////////////////////////
//FORWARD AND BACKWARD ARROWS 
//////////////////////////////

forwardButton.addEventListener('click', () => {
    clearInterval(interval); // Clear interval if was activated before
    index++;
    if(index > imageNumber.length -1){
        index = 0;
    }
    image.setAttribute('src', `./example-screenshots/${imageNumber[index]}.jpg`);
    

})

backwardButton.addEventListener('click', () => {
    clearInterval(interval); // Clear interval if was activated before
    index--;
    if(index < 0){
        index = imageNumber.length -1;
    }
    image.setAttribute('src', `./example-screenshots/${imageNumber[index]}.jpg`);
})


//////////////////////////////
//AUTO FORWARD AND BACKWARD BUTTONS 
//////////////////////////////

autoForwardButton.addEventListener('click', () => {
    timerInput.value > 0 ? duration = timerInput.value * 1000 : '';
     interval = setInterval( () => {
        index++;
        if(index > imageNumber.length -1){
            index = 0;
        }
        image.setAttribute('src', `./example-screenshots/${imageNumber[index]}.jpg`);
        console.log(duration)
    }, duration)
})

autoBackwardButton.addEventListener('click', () => {
    timerInput.value > 0 ? duration = timerInput.value * 1000 : '';
    interval = setInterval( () => {
        index--;
    if(index < 0){
        index = imageNumber.length -1;
    }
    image.setAttribute('src', `./example-screenshots/${imageNumber[index]}.jpg`);
    }, duration)
    
})



//////////////////////////////
//CHECK INPUT VALUE 
//////////////////////////////

timerInput.addEventListener('change', () => {
    timerInput.value < 0 ? alert('You must introduce a positive number') : '';
})