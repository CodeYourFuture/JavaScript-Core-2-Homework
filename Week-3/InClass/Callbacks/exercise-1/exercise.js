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
//  TASK 1

setTimeout(changeBodyColor, 1000);
function changeBodyColor() {
  document.body.style.backgroundColor = "hotpink";
}


//  TASK 2
let colors = ["green", "hotpink", "orange", "orangered", "blue", "beige"];
let backgroundEl = document.querySelector("#main");
let changes = setInterval(backgroundChange, 1000);
function backgroundChange() {
  let randomIndex = Math.floor(Math.random() * colors.length);
  backgroundEl.style.backgroundColor = colors[randomIndex];
}

clearInterval(changes, 6000);
