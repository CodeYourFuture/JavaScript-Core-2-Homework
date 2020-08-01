console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the 
//<section> tags so that they have white backgrounds.
let arrSection=document.querySelectorAll("section");
arrSection.forEach(function(each){
    each.style.backgroundColor="white";
});
// Task 2
// Without changing any of the HTML or CSS,
// update the images on the page so that they are all centered.
// Hint: look at the CSS to see if there are any 
//classes already written which you can use.
let arrImg=document.querySelectorAll("img");
arrImg.forEach(function(each){
    each.style.display="block";
    each.style.marginLeft="auto";
    each.style.marginRight="auto";
});
// Task 3
// Google the date of birth and death of each of 
//the people on the page. Without changing any of the 
//HTML or CSS, add this in a paragraph to the end of their <section>.
let dateOfBirthAndDeath=["Born: 9 December 1906 and Died: 1 January 1992",
"Born: 26 August 1918 and Date of death: 24 February 2020",
"Born: 10 December 1815 and Died: 27 November 1852"];
let paragraph;
for(i=0;i<3;i++){
    paragraph=document.createElement("p");
    paragraph.style.backgroundColor="red";
    paragraph.textContent=dateOfBirthAndDeath[i];
    arrSection[i].appendChild(paragraph);
}

