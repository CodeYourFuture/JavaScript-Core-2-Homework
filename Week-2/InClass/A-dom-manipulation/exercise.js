/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
*/
let paragraph = document.querySelectorAll("p");
console.log(paragraph.length);
/*
    2. the first div element node
    --> should log the ".site-header" node
*/
let firstDiv = document.querySelectorAll("div")[0];
console.log(firstDiv);

/*
    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node
*/
console.log(document.querySelector("#jumbotron-text"));

/*
    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let primaryContent = document.querySelector(".primary-content");
let paragraphs = primaryContent.querySelectorAll("p");
console.log(paragraphs.length);
/*
######################################################
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", myFunction);
function myFunction() {
	alert("Thanks for visiting Bikes for Refugees!");
}
/*
######################################################
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeColour = document.querySelector("#bgrChangeBtn");
changeColour.addEventListener("click", changeBackgroundColor);
function changeBackgroundColor() {
	changeColour.style.backgroundColor = "#00ff00";
}
/*
####################################################
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addText = document.querySelector("#addTextBtn");
addText.addEventListener("click", addedText);
function addedText() {
	let newParagraph = document.createElement("p");
	newParagraph.textContent = "Here is the added text after the Learn more";
	let learnMore = document.querySelector(".heading-underline");
	learnMore.appendChild(newParagraph);
}
/*
#######################################################
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largerLinks = document.querySelector("#largerLinksBtn");
largerLinks.addEventListener("click", increaseLinksSize);
function increaseLinksSize() {
	let bodyElement = document.querySelector("body");
	let allLinks = bodyElement.querySelectorAll("a");
	allLinks.style.fontSize = "20px";
}
