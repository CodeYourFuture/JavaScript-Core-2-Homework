/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
*/
let pageBody = document.querySelector("body");
setTimeout(myFunction, 5000);
function myFunction() {
	pageBody.style.backgroundColor = "#5d0a3f";
}
/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/
let colours = [
	"green",
	"red",
	"blue",
	"yellow",
	"cyan",
	"indigo",
	"orange",
	"pink",
];
function changeColours() {
	let randomColors = Math.floor(Math.random() * colours.length);
	pageBody.style.backgroundColor = colours[randomColors];
}
setInterval(changeColours, 5000);
