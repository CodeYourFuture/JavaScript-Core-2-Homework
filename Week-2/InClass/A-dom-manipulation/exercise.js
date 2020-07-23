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
let firstDiv = document.querySelector(".side-header")
let jumbotron = document.querySelector("#jumbotron-text")
let primaryContent = document.querySelector(".primary-content p")

//console.log(paragraphs);
//console.log(firstDiv);
//console.log(jumbotron);
//console.log(primaryContent);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let changeColorButton = document.querySelector("#bgrChangeBtn");

changeColorButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
})

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

let addTextBtn = document.querySelector("#addTextBtn");
let paragraph = document.createElement("p");

addTextBtn.addEventListener("click", function() {
    let element = document.querySelector(".heading-underline");
    paragraph.textContent = "READ MORE BELOW";
    element.appendChild(paragraph);
});

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
// CSS style has to be added for .larger
let largerText = document.querySelector("#largerLinksBtn");
let links = document.querySelectorAll("a");

largerText.addEventListener("click", function() {
    for (let i = 0; i < links.length; ++i) {
        links[i].classList.add("larger");
    }
});