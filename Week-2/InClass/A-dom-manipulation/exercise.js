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
let allPElements = document.querySelectorAll("p");
console.log(allPElements);

let firstDivEl = document.querySelector("div");
console.log(firstDivEl);

let idJumbotronText = document.querySelector("#jumbotron-text");
console.log(idJumbotronText);

let allPElementsInPrimaryContent = document.querySelectorAll(".primary-content p");
console.log(allPElementsInPrimaryContent);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", function(){
    alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeColorBtn = document.querySelector("#bgrChangeBtn");
changeColorBtn.addEventListener("click", function(){
    changeColorBtn.style.backgroundColor = " yellow";
});

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addTextBtn = document.querySelector("#addTextBtn");
addTextBtn.addEventListener("click", function() {
    let addParagraph = document.createElement("p");
    addParagraph.textContent = "Read more below."
    addTextBtn.appendChild(addParagraph);
});


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/



let largerButton = document.querySelector("#largerLinksBtn");
largerButton.addEventListener("click", function(){
let allLinks = document.querySelectorAll("a");
  allLinks.forEach(btn => btn.style.fontSize = "1.5rem")
});