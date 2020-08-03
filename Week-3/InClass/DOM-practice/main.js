console.log('Testing JS file loaded!');

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let pageSections = document.querySelectorAll('section');
for (var i = 0; i < pageSections.length; i++) {
	pageSections[i].style.backgroundColor = 'white';
}

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
let pageImages = document.querySelectorAll('img');
for (var i = 0; i < pageImages.length; i++) {
	pageImages[i].style.display = 'block';
	pageImages[i].style.marginLeft = 'auto';
	pageImages[i].style.marginRight = 'auto';
}
// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
//9 December 1906 -> 1 January 1992
//26 August 1918->24 February 2020
//10 December 1815  -> 27 November 1852
let grreaceDobDod = document.createTextNode('(9 December 1906 / 1 January 1992)');
pageSections[0].appendChild(grreaceDobDod);

let KatherineDobDod = document.createTextNode('26 August 1918 / 24 February 2020)');
pageSections[1].appendChild(KatherineDobDod);

let adaDobDod = document.createTextNode('(10 December 1815 / 27 November 1852)');
pageSections[2].appendChild(adaDobDod);
