console.log("Testing JS file loaded!")

// Task 1


// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
let mySection = document.getElementsByTagName("section")[0];
console.log(mySection);
mySection.style.backgroundColor = "white";
console.log(mySection);
let mySection1 = document.getElementsByTagName("section")[1];
console.log(mySection1);
mySection1.style.backgroundColor = "white";
console.log(mySection1);
let mySection2 = document.getElementsByTagName("section")[2];
console.log(mySection2);
mySection2.style.backgroundColor = "white";
console.log(mySection2);


// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.


let myImg = document.getElementsByTagName("img")[0];
myImg.style.display = "flex";
myImg.style.margin = "0 auto";
console.log(myImg);

let myImg1 = document.getElementsByTagName("img")[1];
myImg1.style.display = "flex";
myImg1.style.margin = "0 auto";
console.log(myImg1);

let myImg2 = document.getElementsByTagName("img")[2];
myImg2.style.display = "flex";
myImg2.style.margin = "0 auto";
console.log(myImg2);


// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
let myhEl = document.querySelectorAll("section")[0];
let pEl = document.createElement("p");
pEl.innerHTML = "Date of Birth: December 9, 1906"
myhEl.appendChild(pEl);
console.log(myhEl);

let myEl = document.querySelectorAll("section")[1];
let mypEl = document.createElement("p");
mypEl.innerHTML = "Date of Birth: August 26, 1918"
myEl.appendChild(mypEl);
console.log(mypEl);

let myEl2 = document.querySelectorAll("section")[2];
let mypEl2 = document.createElement("p");
mypEl2.innerHTML = "Date of Birth: 10 December 1815"
myEl2.appendChild(mypEl2);
console.log(mypEl2);
