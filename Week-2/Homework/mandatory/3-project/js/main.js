var blueButtonElement = document.querySelector('#blueBtn');
var jumbotronElement = document.querySelector('.jumbotron');
var donationButton = document.querySelector('.jumbotron .buttons .btn-primary');
var volunteerButtonElement = document.querySelector(
    '.jumbotron .buttons .btn-secondary'
);
blueButtonElement.addEventListener('click', function () {
    jumbotronElement.style.backgroundColor = `#588fbd`;
    donationButton.style.backgroundColor = `#ffa500`;
    volunteerButtonElement.style.backgroundColor = 'black';
    volunteerButtonElement.style.color = 'white';
});

var orangeButtonElement = document.querySelector('#orangeBtn');
orangeButtonElement.addEventListener('click', function () {
    jumbotronElement.style.color = `#f0ad4e`;
    donationButton.style.backgroundColor = `#5751fd`;
    volunteerButtonElement.style.backgroundColor = `#31b0d5`;
    volunteerButtonElement.style.color = 'white';
});

var greenButtonElement = document.querySelector('#greenBtn');
greenButtonElement.addEventListener('click', function () {
    jumbotronElement.style.backgroundColor = `#87ca8a`;
    donationButton.style.backgroundColor = `black`;
    volunteerButtonElement.style.backgroundColor = `#8c9c08`;
});


var submitElement = document.querySelector('form button');
submitElement.addEventListener('click', function (e) {
    e.preventDefault();
    var emailElement = document.getElementById('exampleInputEmail1');
    var nameElement = document.getElementById('example-text-input');
    var descElement = document.getElementById('exampleTextarea');
    if (emailElement.value.length === 0 || emailElement.value.includes('@') === false) {
        emailElement.style.backgroundColor = 'red';
    }
    if (nameElement.value.length === 0) {
        nameElement.style.backgroundColor = 'red';
    }
    if (descElement.value.length === 0) {
        descElement.style.backgroundColor = 'red';
    }
    if (
        emailElement.value.length > 0 &&
        emailElement.value.includes('@') === true &&
        nameElement.value.length > 0 &&
        descElement.value.length > 0
    ) {
        var formElement = document.querySelector('form');
        formElement.reset();
        alert('thank you for filling out the form');
    }
});