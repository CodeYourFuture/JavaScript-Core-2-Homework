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
console.log(document.getElementsByTagName("p"));
console.log(document.querySelector(".site-header"));
console.log(document.querySelector("#jumbotron-text"));
console.log(document.querySelector(".primary-content p"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertButton = document.getElementById("alertBtn");
console.log("alertButton");
alertButton.addEventListener("click", () =>
  alert("Thanks for visiting Bikes for Refugees!")
);
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let bgrChangeBtn = document.getElementById("bgrChangeBtn");
bgrChangeBtn.addEventListener(
  "click",
  () => (document.querySelector("body").style.backgroundColor = "skyblue")
);

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says ""
*/
let addTextBtn = document.getElementById("addTextBtn");
addTextBtn.addEventListener("click", () => {
  let par = document.createElement("p");
  let contex = document.querySelector(".jumbotron");
  par.textContent = "Read more below.";
  contex.appendChild(par);
});

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", () => {
  let allLinks = document.querySelectorAll("a");
  for (let thisLink in allLinks) {
    console.log(allLinks[thisLink]);
    let currentSize = parseFloat(allLinks[thisLink].style["font-size"]);
    if(currentSize >=2){
      
      allLinks[thisLink].style["font-size"] = currentSize / 1.1 + "rem";
    allLinks[thisLink].style.color = "purple";
    } else if(currentSize >=1.5){
      alert("Stop it immediately!");
      allLinks[thisLink].style["font-size"] = currentSize * 1.1 + "rem";
    } else {
    allLinks[thisLink].style["font-size"] = currentSize * 1.1 + "rem";
    allLinks[thisLink].style.color = "red";}
  }
});
