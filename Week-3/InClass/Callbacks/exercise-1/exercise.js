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

let colors = ["red", "blue", "green", "yellow", "orange", "purple"];
let backgroundChange = document.querySelector("body");

function changeColor() {
  let randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColor];
}

setTimeout(changeColor, 5000);

//task 2
setInterval(changeColor, 5000);


