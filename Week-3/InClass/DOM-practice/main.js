console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
  let getSection = document.querySelectorAll("section");
   for(var i=0;i<getSection.length;i++){
       getSection[i].style.backgroundColor ="white";
   }





// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
let getImages =document.querySelectorAll("img");
for(var i=0;i<getImages.length;i++){
    getImages[i].className = "content-title";
}


// Hint: look at the CSS to see if there are any classes already written which you can use.






// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
  let dateOfBirth = ["9-12-1906","26-8-1918","10-12-1815"];
let dateOfDeath = ["1-1-1992", "24-2-2020", "27-11-2020"];


for(var i=0;i<getSection.length;i++){
 let newP = document.createElement("p");
 newP.textContent = "Date of Birth is "+dateOfBirth[i]+" and Date of Death is "+dateOfDeath[i];
 getSection[i].appendChild(newP);
}
