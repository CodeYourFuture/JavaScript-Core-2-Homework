/*
================
EXERCISE 1


Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).


Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/
//Task 1
setTimeout(function(){
     
    document.body.style.backgroundColor = "blue";
   
}, 5000);

//Task 2

function getRandomColor () {
    let color1 = Math.floor(Math.random() * 255 );
    let color2 = Math.floor(Math.random() * 255 );
    let color3 = Math.floor(Math.random() * 20 );
    let randomColor = 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')';
    return randomColor;
  }

setInterval(function change() {
 
  document.body.style.backgroundColor = getRandomColor();
}, 5000);