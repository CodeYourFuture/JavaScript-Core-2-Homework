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
let paragraph = document.querySelectorAll("p");
let siteHeader = document.querySelector(".site-header");
let jumbotron = document.querySelector("#jumbotron-text");
let primaryContentparagraph = document.querySelectorAll(".primary-content p")

console.log(paragraph);
console.log(siteHeader);
console.log(jumbotron);
console.log(primaryContentparagraph);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector("alertBtn");
alertButton.addEventListener("click", function(event) {
    alert("Thanks for visiting Bikes for Refugees!");
})


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
 
*/
let changeColour = document.querySelector("#bgrChangeBtn");
changeColour.addEventListener("click", function(event) {
    document.body.style.backgroundColor = "yellow";

})


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addTextButton = document.querySelector("#addTextBtn");
let paragraph = document.createElement("p");
addTextButton.addEventListener("click", function () {
    paragraph.textContent = "Read more below.";
    addTextButton.appendChild(paragraph);
})




/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largerText = document.querySelector("#largerLinksBtn");
let allLinks = document.querySelectorAll("a");
largerText.addEventListener("click", function () {
    for (i = 0; i < allLinks.length; i++) {
        allLinks[i].style.fontSize = "30px";
    }
})