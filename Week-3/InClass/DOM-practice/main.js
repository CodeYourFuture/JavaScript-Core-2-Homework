console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let sectionTags = document.getElementsByTagName("section");
console.log(sectionTags);

for (let i =0; i < sectionTags.length; i++){
    sectionTags[i].style.backgroundColor = "white";
}

/* function changeBackGroundColor (){
    section.style.backgroundColor = "green";
}
sectionTags.forEach(changeBackGroundColor); */



// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

let images = document.getElementsByTagName("img");

for (let i=0; i < images.length; i++){
    images[i].className = "img-center";
}




// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.


let graceHopper = document.createElement("p");
graceHopper.textContent = `She was born December 9, 1906 and died January 1, 1992`;
sectionTags[0].appendChild(graceHopper);

let katherineJohnson = document.createElement("p");
katherineJohnson.textContent = `She was born August 26, 1918 and died February 24, 2020`;
sectionTags[1].appendChild(katherineJohnson);

let adaLovelace = document.createElement("p");
adaLovelace.textContent = `She was born December 10, 1915 and died November 27, 1852`;
sectionTags[2].appendChild(adaLovelace);

/* for (let i =0; i < sectionTags.length; i++){
    let newPElm = document.createElement("p");
    //sectionTags[i].style.backgroundColor = "green";
} */

