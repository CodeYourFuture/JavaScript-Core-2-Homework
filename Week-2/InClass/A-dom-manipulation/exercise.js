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
//1
console.log(document.querySelectorAll("p"));
//2
console.log(document.querySelector("div"));
//3
console.log(document.querySelector("#jumbotron-text"));
//4
console.log(document.querySelectorAll(".primary-content p"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let  alertButton = document.querySelector("#alertbtn")
alertButton.addEventListener("click",function(){
    alert("Thanks for visiting Bikes for Refugees!")
})
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var colorButton = document.querySelector("#bgrChangeBtn")
colorButton.addEventListener("click",function(){
document.body.style.backgroundColor = "yellow"
})

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var textButton = document.getElementById("addTextBtn");
var createParagraph = document.createElement("p")
createParagraph.textContent = "Read more below";
textButton.addEventListener("click",function(){
    textButton.parentNode.appendChild(createParagraph);
})

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var makeLargeBtn=document.getElementById("largerLinksBtn")
makeLargeBtn.addEventListener("click",function(){
  let i = document.links.length;
  for(let x=0;x<i; x++){
      document.links[x].style.fontSize =  "45px";
  }
})