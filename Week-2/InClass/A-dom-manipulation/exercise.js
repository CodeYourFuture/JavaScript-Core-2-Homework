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
console.log(document.querySelectorAll("p"));
console.log(document.querySelector("div"));
console.log(document.querySelectorAll("#jumbotron-text"));
console.log(document.querySelectorAll(".primary-content p"));

/*
Task 2
======
When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let clickButton = document.getElementById("alertBtn"); 
clickButton.addEventListener("click", alertSomething); 
    function alertSomething() {
        alert("Thanks, Domenico for visiting Bikes for Refugees!");
    }
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let clickBackgroundButton = document.getElementById("bgrChangeBtn");
function changeBackground() {
document.body.style.backgroundColor = "blue";
}
clickBackgroundButton.addEventListener("click", changeBackground);
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let clickThatButton = document.getElementById("addTextBtn"); 

clickThatButton.addEventListener("click", addNewPar); 
    function addNewPar() {
        let paragraph = document.createElement("p"); 
        paragraph.innerText = "Read more below.";
        let myElement = document.querySelector(".buttons");
        myElement.appendChild(paragraph);
    };

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largerLinkButton = document.querySelector("#largerLinksBtn"); 
 console.log(largerLinkButton);
    largerLinkButton.addEventListener("click", makeLinksLarger);

let allLinks = document.querySelectorAll("a");
    function makeLinksLarger() {
       console.log(allLinks)
        for( let i = 0 ; i < allLinks.length; i++) {
            console.log(allLinks);
            allLinks[i].style.fontSize = "50px";
        }
    }