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
/*
var tester = document.querySelector('body');
tester.style.backgroundColor = 'blue';*/

document.querySelectorAll('p');
document.querySelector('div');
document.querySelector('#jumbotron-text');
document.querySelectorAll('.primary-content p');

/*
Task 2
======  

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector('#alertBtn');
alertButton.addEventListener('click', displayMessage);
function displayMessage() {
	alert('Thanks for visiting Bikes for Refugees!');
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let colorButton = document.querySelector('#bgrChangeBtn');
colorButton.addEventListener('click', changeColor);
function changeColor() {
	document.body.style.backgroundColor = 'blue'; //'aqua';
}
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addTextButton = document.querySelector('#addTextBtn');
addTextButton.addEventListener('click', addText);
function addText() {
	var para = document.createElement('p');
	var node = document.createTextNode('Read more below.');
	para.appendChild(node);
	document.querySelector('.buttons').appendChild(para);
}

/*
Task 5
======

    When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largeLinkButton = document.getElementById('largerLinksBtn');
largeLinkButton.addEventListener('click', enlargeLink);
let linksTags = document.getElementsByTagName('a');

function enlargeLink() {
	for (var i = 0; i < linksTags.length; i++) {
		linksTags[i].style.fontSize = '28px';
	}
}
