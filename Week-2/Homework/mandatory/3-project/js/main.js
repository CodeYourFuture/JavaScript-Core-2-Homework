// Part 1

const blueBtn = document.getElementById('blueBtn');
const orangeBtn = document.getElementById('orangeBtn');
const greenBtn = document.getElementById('greenBtn');

const jumbotron = document.querySelector('.jumbotron');
const donateBtn = jumbotron.querySelector('.btn-primary');
const volunteerBtn = jumbotron.querySelector('.btn-secondary');

function handleBlueButton() {
  jumbotron.style.backgroundColor = '#588fbd';
  donateBtn.style.backgroundColor = '#ffa500';
  volunteerBtn.style.backgroundColor = '#000';
  volunteerBtn.style.color = '#fff';
}

function handleOrangeButton() {
  jumbotron.style.backgroundColor = '#f0ad4e';
  donateBtn.style.backgroundColor = '#5751fd';
  volunteerBtn.style.backgroundColor = '#31b0d5';
  volunteerBtn.style.color = '#fff';
}

function handleGreenButton() {
  jumbotron.style.backgroundColor = '#87ca8a';
  donateBtn.style.backgroundColor = '#000';
  volunteerBtn.style.backgroundColor = '#8c9c08';
  volunteerBtn.style.color = '#fff';
}

blueBtn.addEventListener('click', handleBlueButton);
orangeBtn.addEventListener('click', handleOrangeButton);
greenBtn.addEventListener('click', handleGreenButton);

// Part 2

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll('.primary-content .form-control');

  // returns true when there are no errors
  if (validateInputs(inputs)) {
    inputs.forEach((input) => (input.value = ''));
    alert('Thank you for filling out the form');
  }
});

function validateInputs(inputs) {
  let formValid = true;

  inputs.forEach((input) => {
    if (
      input.value.length < 1 ||
      (input.type === 'email' && !input.value.includes('@'))
    ) {
      input.style.backgroundColor = 'red';
      formValid = false;
    } else {
      input.style.backgroundColor = 'white';
    }
  });

  /* An attempt to create new elements for error messages below */

  inputs.forEach((input) => {
    let errorElement = document.createElement('p');
    errorElement.style.color = 'red';
    errorElement.style.margin = 0;
    errorElement.style.fontSize = '0.8rem';
    errorElement.setAttribute('class', 'validationError');

    // error already shown on the page, use the previously created element
    if (input.previousElementSibling.classList.contains('validationError')) {
      errorElement = input.previousElementSibling;
    }

    // error for blank field
    if (input.value.length < 1) {
      errorElement.textContent = 'This field cannot be left blank.';
      input.parentElement.insertBefore(errorElement, input);
      formValid = false;

      // error for missing '@'
    } else if (input.type === 'email' && !input.value.includes('@')) {
      errorElement.textContent = 'Email must contain "@" character.';
      input.parentElement.insertBefore(errorElement, input);
      formValid = false;
    } else {
      // input is valid - remove the error element
      errorElement.remove();
    }
  });

  return formValid;
}
