console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let sections = document.getElementsByTagName("section");
// for (let i = 0; i < sections.length; i++) {
//     sections[i].style.backgroundColor = "white";
// }
Array.from(sections).forEach(
  (section) => (section.style.backgroundColor = "white")
);

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

// let sections = document.getElementsByTagName('section');
// Array.from(sections).forEach((section) => section.style.display = 'flex');

let images = document.getElementsByTagName("img");
Array.from(images).forEach((image) => {
  image.style.display = "block";
  image.style.marginRight = "auto";
  image.style.marginLeft = "auto";
});

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
let birthDeath = [
  {
    name: "Grace Hopper",
    born: "December 9, 1906",
    died: "January 1, 1992",
  },
  {
    name: "Katherine Johnson",
    born: "August 26, 1918",
    died: "February 24, 2020",
  },
  {
    name: "Ada Lovelace",
    born: "December 10, 1815",
    died: "November 27, 1852",
  },
];

let addToSection = document.getElementsByTagName("section");

for (let i = 0; i < addToSection.length; i++) {
  let pEl = document.createElement("p");
  pEl.textContent = `Born: ${birthDeath[i].born} Died: ${birthDeath[i].died}`;
  addToSection[i].appendChild(pEl);
}
