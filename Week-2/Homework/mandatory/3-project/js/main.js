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
