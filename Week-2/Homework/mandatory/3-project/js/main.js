let blueButton = document.getElementById('blueBtn');
let orangeButton = document.getElementById('orangeBtn');
let greenButton = document.getElementById('greenBtn');

let jumbotron = document.querySelector('.jumbotron');
let donateBikeBtn = document.querySelector('.buttons .btn-primary');
let volunteerBtn = document.querySelector('.buttons .btn-secondary');

blueButton.addEventListener('click', event => {
    jumbotron.style.backgroundColor = '#588fbd';
    donateBikeBtn.style.backgroundColor = '#ffa500';
    volunteerBtn.style.backgroundColor = '#000';
    volunteerBtn.style.color = '#fff';
})


orangeButton.addEventListener('click', event => {
    jumbotron.style.backgroundColor = '#f0ad4e';
    donateBikeBtn.style.backgroundColor = '#5751fd';
    volunteerBtn.style.backgroundColor = '#31b0d5';
    volunteerBtn.style.color = '#fff';
})


greenButton.addEventListener('click', event => {
    jumbotron.style.backgroundColor = '#87ca8a';
    donateBikeBtn.style.backgroundColor = '#000';
    volunteerBtn.style.backgroundColor = '#8c9c08';
})


// PART 2

let submitButton = document.querySelector('form .btn-primary');
let email = document.getElementById('exampleInputEmail1');
let name = document.getElementById('example-text-input');
let textArea = document.getElementById('exampleTextarea');


submitButton.addEventListener('click', event => {
    event.preventDefault();

    if( email.value && name.value && textArea.value && email.value.includes('@')){
        alert('Thank you for filling the form');
        email.value = '';
        name.value = '';
        textArea.value = '';
    }

    email.value === '' ? email.style.backgroundColor = 'red': '';
    name.value === '' ? name.style.backgroundColor = 'red': '';
    textArea.value === '' ? textArea.style.backgroundColor = 'red': '';
})




