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
//(1)
console.log(document.querySelectorAll("p"));

//(2)
console.log(document.querySelector("div"));

//(3)
console.log(document.queryCommandValue("#jumbotron-text"));

//(4)
arrEl = Array.from(document.querySelectorAll(".primary-content p"));
console.log(arrEl);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var alertCl = document.querySelector("#alertbtn");
alertCl.addEventListener("click", function() {
    alert("Thanks for visiting Bikes for Refugees!");
})
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var changeBcCol = document.querySelector("#bgrChangeBtn");
changeBcCol.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
})

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var newTextbtn = document.querySelector("#addTextBtn");
var p = document.createElement("p");
p.textContent = "Read more below.";
newTextbtn.addEventListener("click", function(){
    newTextbtn.parentNode.appendChild(p);
})



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
// var largLink = document.querySelector("#largerLinksBtn");
// largLink.addEventListener("click", function(){
//     largLink.style.fontSize("18px")
// })