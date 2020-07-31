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

let para = document.querySelectorAll("p");

console.log(para);

let siteHeader = document.querySelector(".site-header");

console.log(siteHeader);

let jumbo = document.querySelector("#jumbotron-text");

console.log(jumbo);

let primaryContent = document.querySelectorAll(".primary-content p");
console.log(primaryContent);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", function () {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let colourBtn = document.querySelector("#bgrChangeBtn");
let body = document.querySelector("body");
let color = ["green", "red", "purple", "orange", "yellow"];

colourBtn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 5);
  body.style.backgroundColor = color[randomNumber];
});

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

let textBtn = document.querySelector("#addTextBtn");
let paragraph = document.createElement("p");
let btns = document.querySelector(".buttons");

textBtn.addEventListener("click", (event) => {
  paragraph.textContent = "Read more below.";
  btns.appendChild(paragraph);
});

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let linksBtn = document.querySelector("#largerLinksBtn");
let allLinks = document.querySelectorAll("a");

linksBtn.addEventListener("click", function () {
  for (let i = 0; i < allLinks.length; i++) {
    //allLinks[i].classList.add("larger");
    //allLinks[i].style.fontSize = "30px";
    allLinks[i].classList.add("larger");
  }
});
