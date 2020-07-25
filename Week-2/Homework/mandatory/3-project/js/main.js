let blueButton = document.querySelector('#blueBtn');
blueButton.addEventListener('click', function() {
	document.querySelector('.Jumbotron').style.backgroundColor = `#588fbd`;
	document.querySelector('.buttons').firstElementChild.style.backgroundColor = `#ffa500`;
	document.querySelector('.buttons').firstElementChild.nextElementSibling.style.backgroundColor = 'black';
	document.querySelector('.buttons').firstElementChild.nextElementSibling.style.color = 'white';
});

let orangeButton = document.querySelector('#orangeBtn');
orangeButton.addEventListener('click', function() {
	document.querySelector('.Jumbotron').style.backgroundColor = `#f0ad4e`;
	document.querySelector('.buttons').firstElementChild.style.backgroundColor = `#5751fd`;
	document.querySelector('.buttons').firstElementChild.nextElementSibling.style.backgroundColor = `#31b0d5`;
	document.querySelector('.buttons').firstElementChild.nextElementSibling.style.color = 'white';
});
let greenButton = document.querySelector('#greenBtn');
greenButton.addEventListener('click', function() {
	document.querySelector('.Jumbotron').style.backgroundColor = `#87ca8a`;
	document.querySelector('.buttons').firstElementChild.style.backgroundColor = `black`;
	document.querySelector('.buttons').firstElementChild.nextElementSibling.style.backgroundColor = `#8c9c08`;
});

let submitButton = document.querySelector('form').lastElementChild;
submitButton.addEventListener('click', validate);

function validate() {
	let valid = true;
	let emailElement = document.querySelector('#exampleInputEmail1');
	document.querySelector('#exampleTextarea').style.backgroundColor = 'transparent';

	let textElement = document.querySelector('#example-text-input');
	textElement.style.backgroundColor = 'transparent';
	let areaElement = document.querySelector('#exampleTextarea');
	areaElement.style.backgroundColor = 'transparent';

	if (document.querySelector('#exampleInputEmail1').value.length === 0) {
		valid = false;
		document.querySelector('#exampleInputEmail1').style.backgroundColor = 'red';
	} else if (!document.querySelector('#exampleInputEmail1').value.includes('@')) {
		valid = false;
		document.querySelector('#exampleInputEmail1').style.backgroundColor = 'red';
	}

	if (document.querySelector('#example-text-input').value.length === 0) {
		valid = false;
		document.querySelector('#example-text-input').style.backgroundColor = 'red';
	}
	if (document.querySelector('#exampleTextarea').value.length === 0) {
		valid = false;
		document.querySelector('#exampleTextarea').style.backgroundColor = 'red';
	}

	if (valid === true) {
		alert('Thank you for filling out the form');
		// Blank out (make empty) all the text fields
		emailElement.value = '';
		textElement.value = '';
		areaElement.value = '';
	}
	event.preventDefault();
}
