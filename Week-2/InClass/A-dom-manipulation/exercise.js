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
//          (1)
console.log(document.querySelectorAll("p"));
//          (2)
console.log(document.querySelector("div").firstElementChild.nextElementSibling)
//          (3)
console.log(document.querySelector("#jumbotron-text"))
console.log(document.getElementById("jumbotron-text"))
//          (4)
parArray=Array.from( document.querySelectorAll(".primary-content p"))
console.log(parArray)

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up
 with the text "Thanks for visiting Bikes for Refugees!"
*/

var alrtbt = document.querySelector("#alertbtn")
alrtbt.addEventListener("click",function(){
    alert("Thanks for visiting Bikes for Refugees!")
})

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var changeCBtn = document.querySelector("#bgrChangeBtn")
changeCBtn.addEventListener("click",function(){
document.body.style.backgroundColor = "purple"
})

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var addSomeTextBtn = document.querySelector("#addTextBtn");
var p = document.createElement("p")
p.textContent = "Read more below";
addSomeTextBtn.addEventListener("click",function(){
    addSomeTextBtn.parentNode.appendChild(p);
})


/*
Task 5
======

When the 'Larger links!' button is clicked, 
the text of all links on the page should increase.
*/
var largeBtn=document.querySelector("#largerLinksBtn")
largeBtn.addEventListener("click",function(){
  let i = document.links.length;
  for(let j=0;j<i; j++){
      document.links[j].style.fontSize =  "xx-large";
  }
})
