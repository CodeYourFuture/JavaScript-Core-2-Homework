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
let pEls = document.getElementsByTagName("p");
// console.log(pEls);
let divEl = document.querySelector(".site-header");
console.log(divEl);
let jumbotronEl = document.querySelector("#jumbotron-text");
console.log(jumbotronEl);
let primaryPEl = document.querySelectorAll(".primary-content p");
console.log(primaryPEl);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertEl = document.querySelector("#alertBtn");
alertEl.addEventListener("click", function(event) {
    alert("Thanks for visiting Bikes for Refugees!");
});


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeColEl = document.querySelector("#bgrChangeBtn");
changeColEl.addEventListener("click", function (event) {
    document.body.style.backgroundColor = "#ce5f31";
});

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addTextEl = document.querySelector("#addTextBtn");
let element = document.querySelector(".buttons");
addTextEl.addEventListener("click", function (event) {
    let newP = document.createElement("p");
    element.appendChild(newP);
newP.textContent = "Add some text";
});



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let linksEls = document.querySelector("#largerLinksBtn");
let aEls = document.querySelectorAll("a");
linksEls.addEventListener("click", function (event) {
  
  
    for (let i = 0; i < aEls.length; i++) {
        aEls[i].classList.add("larger")
   } 
});