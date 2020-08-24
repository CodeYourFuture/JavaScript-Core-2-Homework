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

*/ let getAllParagraphElements = document.querySelectorAll(
  "p"
);
console.log(getAllParagraphElements);
let getDivNode = document.querySelector(".site-header");
console.log(getDivNode);
let getJumbotronText = document.querySelector("#jumbotron-text");
console.log(getJumbotronText);
let getParagraphInsidePrimaryContent = document.querySelectorAll(
  ".primary-content p"
);
console.log(getParagraphInsidePrimaryContent);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let clickAlertButton = document.querySelector("#alertBtn");
clickAlertButton.addEventListener("click", function (event) {
  alert("Thanks for visiting Bikes for Refugees!");
});
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let getChangeColorButton = document.querySelector("#bgrChangeBtn");
getChangeColorButton.addEventListener("click", function (event) {
  let colors = ["lightBlue", "Pink", "Yellow"];
  document.querySelector("body").style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let getReadMoreButton = document.querySelector("#addTextBtn");
getReadMoreButton.addEventListener("click", function (event) {
  let newText = document.createElement("p");
  newText.textContent = "New Text Paragraph added";
  let displayText = document.querySelector(".buttons");
  displayText.append(newText);
});
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let getLargerLinks = document.querySelector("#largerLinksBtn");
getLargerLinks.addEventListener("click", function (event) {
 let getAllLinks = document.querySelectorAll("a");
 for(var i=0;i<getAllLinks.length;i++){
     getAllLinks[i].style.fontSize="xx-large";
 }
});
