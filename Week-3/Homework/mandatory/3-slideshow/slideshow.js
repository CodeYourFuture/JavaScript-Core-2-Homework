let myPics = ["./images/nasa-Q1p7bh3SHj8-unsplash.jpg", "./images/the-new-york-public-library-yEauzeZU6xo-unsplash.jpg",
 "./images/tyler-van-der-hoeven-_ok8uVzL2gI-unsplash.jpg",
"./images/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg", "./images/pushkaraj-deshpande-W4irODCD3fo-unsplash.jpg",
 "./images/sander-wehkamp-2gSqmAv0JPU-unsplash.jpg", "./images/janko-ferlic-p8N1FeT1Nw8-unsplash.jpg"];

let index = 0;
let reverseIndex = 6;
let play;
let reversePlay;
let moveone;
let counter = 0;
let reverseCounter = 6;



//selectors
let backBtn = document.getElementById('pBtn');
let forwardBtn = document.getElementById('nBtn');
let autoForwards = document.getElementById('autofBtn');
let reverse = document.getElementById('autopBtn');
let stopBtn = document.getElementById('stopBtn');
let imageselector = document.querySelector('#myImages');
let title = document.querySelector('h1');



//event listeners
backBtn.addEventListener('click', function(){
    console.log('back!');

   moveBack = setTimeout(function() {
        document.getElementById('myImages').src = myPics[reverseCounter];
        if(reverseCounter === myPics.length-6){
            reverseCounter = 6;
        }
    }, 500);
       reverseCounter--;       
});


forwardBtn.addEventListener('click', () => {
    console.log('forward button clicked!');
    
        moveone = setTimeout(function(){
            document.getElementById('myImages').src = myPics[counter];
           if(counter == 6){
             counter = 0;
           }
           
    }, 500);
  
   counter++;
    
    

});

reverse.addEventListener('click', () =>{
    console.log('auto reverse!!');

    reversePlay = setInterval(function(){
        document.getElementById('myImages').src = myPics[reverseIndex];
        reverseIndex--;

        if(reverseIndex === myPics.length-6){
            reverseIndex = 6;
        }

    }, 2000);
});

autoForwards.addEventListener('click', function(){
    console.log('auto forwards!!!');
   play = setInterval(function(){
        document.getElementById('myImages').src = myPics[index];
        index++;

        if(index === myPics.length){
            index = 0;
            
        }
    }, 2000);
});

function stopit() { stopBtn.addEventListener('click', () =>{
    console.log('move one stopped!!');
   
   
    clearInterval(moveone);
});

}

stopBtn.addEventListener('click', () =>{
    console.log('stopped!!');
    clearInterval(play);
    clearInterval(reversePlay);
    //clearInterval(moveone);
    //clearInterval(moveBack);
});