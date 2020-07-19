/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let paragraphs = document.querySelectorAll("p");
let firstDiv = document.querySelector(".site-header");
let jumbotronText = document.querySelector("#jumbotron-text");
let pInPrimaryContent = document.querySelectorAll(".primary-content p");

console.log(paragraphs);
console.log(firstDiv);
console.log(jumbotronText);
console.log(pInPrimaryContent);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector("#alertBtn");
console.log(alertButton);
alertButton.addEventListener("click", function (event) {
  alert("Thanks for visiting Bikes for Refugees!");
});
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeColor = document.querySelector("#bgrChangeBtn");
changeColor.addEventListener("click", function (event) {
  document.body.style.backgroundColor = "orange";
});
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addText = document.querySelector("#addTextBtn"); //Button to be clicked to generate new text
let paragraph = document.createElement("p"); //creates a new paragraph element

addText.addEventListener("click", function () {
  let element = document.querySelector(".heading-underline"); //element to which the new child will be appended
  paragraph.textContent = "Read More Below"; //adds texts to the newly created paragraph
  element.appendChild(paragraph);
});

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largerTexts = document.querySelector("#largerLinksBtn");
let allLinks = document.querySelectorAll("a");

largerTexts.addEventListener("click", function () {
  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].classList.add("larger");
  }
});
