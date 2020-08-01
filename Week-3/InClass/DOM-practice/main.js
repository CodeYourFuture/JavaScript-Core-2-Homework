console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.


let sections = document.getElementsByTagName("section");
for (let i = 0; i < sections.length; ++i) {
    sections[i].style.backgroundColor = "white";
}


// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.


let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; ++i) {
    images[i].className += " content-title";
}



// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

let firstParagraph = document.createElement("p");
firstParagraph.innerHTML = "Grace Hopper was born on December 9, 1906, and died on January 1, 1992, at the age of 85.";
sections[0].appendChild(firstParagraph);

let secondParagraph = document.createElement("p");
secondParagraph.innerHTML = "Katherine Johnson was born on August 26, 1918, and died on February 24, 2020, at the age of 101.";
sections[1].appendChild(secondParagraph);

let thirdParagraph = document.createElement("p");
thirdParagraph.innerHTML = "Ada Lovelace was born on December 10, 1815, and died on November 27, 1852, at the age of 36.";
sections[2].appendChild(thirdParagraph);