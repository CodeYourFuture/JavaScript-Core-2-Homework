
* /
console.log(document.querySelectorAll("h1"));
console.log(document.querySelectorAll("p"));
console.log(document.querySelector("div"));
console.log(document.querySelector("#jumbotron-text"));
console.log(document.querySelectorAll(".primary-content p"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertBtn = document.querySelector("#alertBtn")
alertBtn.addEventListener("click", function alertSomething() {
    alert("Something");
})

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let brgBtn = document.querySelector("#bgrChangeBtn");
//brgBtn.addEventListener("click", function changeBgr() {
brgBtn.style.backgroundColor = "red";
//})

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

let buttonsContainer = document.querySelector(".buttons");
let addTextBtn = document.querySelector("#addTextBtn");

addTextBtn.addEventListener("click", function (event) {
    // Create a new paragraph element
    let paragraph = document.createElement("p");
    // Add some text to the new paragraph element
    paragraph.textContent = "Read more below";

    buttonsContainer.appendChild(paragraph);
});

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/