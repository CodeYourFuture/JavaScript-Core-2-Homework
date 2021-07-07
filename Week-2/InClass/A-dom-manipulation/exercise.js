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
let allPElements = document.querySelectorAll('p');
console.log(allPElements);

let firstDivElement = document.querySelector(".site-header.container");
console.log(firstDivElement);

let jumbotronT = document.querySelector("#jumbotron-text");

console.log(jumbotronT);

let primaryContentP= document.querySelectorAll(".primary-content p");

console.log(primaryContentP);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

 let myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let myBackgroundColor = document.getElementById("bgrChangeBtn");
myBackgroundColor.addEventListener("click", changeBackGroundColor);

function changeBackGroundColor() {
    let selectBodyElement= document.querySelector("body");
    selectBodyElement.style.backgroundColor= "red";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

let addNewParagraph = document.querySelector("#addTextBtn");
addNewParagraph.addEventListener("click", addSomeMoreText);

function addSomeMoreText() {
  let paragraph = document.createElement("p");
    paragraph.textContent = "Read more below."; 
  let buttonSame = document.querySelector(".buttons")
  buttonSame.appendChild(paragraph);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

/* let linksPage = document.querySelector("#largerLinksBtn");
linksPage.addEventListener("click", textSizeGetBigger);

function textSizeGetBigger() {
  let allLinksOnThePage = document.getElementsByTagName("a");

 for (var i=0; i < allLinksOnThePage.length; i++ ){
     allLinksOnThePage[i].classList.add(".larger");
 }
} */


let largeButton = document.getElementById("largerLinksBtn");
console.log(largeButton);
largeButton.addEventListener("click", textSizeBigger);

function textSizeBigger() {
  let allAnchorEls = document.getElementsByTagName("a");

  for (let i=0; i < allAnchorEls.length; i++){
      allAnchorEls[i].style.fontSize = "30px";
  }
  
}


/* Wahab lecture example
let btn = document.querySelector('#largerLinksBtn');
let allLinks = document.querySelectorAll('a');
btn.addEventListener("click", function(){
for(let i = 0; i < allLinks.length; i++){
allLinks[i].classList.add("larger");
}
}); */