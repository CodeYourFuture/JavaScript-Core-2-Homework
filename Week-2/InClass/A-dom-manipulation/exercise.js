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
const allP = document.querySelectorAll('p');
console.log(allP);
const firstDiv = document.querySelector('div');
console.log(firstDiv);
const jumbotronTextElement = document.getElementById('jumbotron-text');
console.log(jumbotronTextElement);
console.log(document.querySelectorAll('.primary-content p'));
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"

*/

const alertButton = document.querySelector('#alertBtn');
console.log(alertButton);
alertButton.addEventListener('click', () =>
  alert('Thanks for visiting Bikes for Refugees!')
);

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const bodyElement = document.querySelector('body');
// const bodyElement = document.getElementsByTagName('body')[0];
const changeColourButton = document.querySelector('#bgrChangeBtn');
// const changeColourButton = document.getElementById('bgrChangeBtn');

const allDivs = document.getElementsByTagName('div');
console.log(allDivs);
changeColourButton.addEventListener('click', () => {
  //   bodyElement.style.backgroundColor = 'orangered';
  //   console.log(bodyElement);
  //   console.log(changeColourButton);
  Array.from(allDivs).forEach((div) => (div.style.backgroundColor = 'orange'));
});

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
const addTextBtn = document.getElementById('addTextBtn');

const p = document.createElement('p');
const context = document.querySelector('.jumbotron');
addTextBtn.addEventListener('click', () => {
  p.textContent = 'Read more below.';
  context.appendChild(p);
});
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const largerLinksBtn = document.getElementById('largerLinksBtn');

largerLinksBtn.addEventListener('click', () => {
  const allLinks = document.querySelectorAll('a');

  allLinks.forEach((anchor) => {
    let currentSize = anchor.style.fontSize; // 1em
    let justSizeNumber = parseFloat(currentSize);
    anchor.style.fontSize = justSizeNumber * 1.1 + 'rem';
  });
});
