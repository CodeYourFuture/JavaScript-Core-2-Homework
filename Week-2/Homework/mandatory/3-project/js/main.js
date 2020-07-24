//Part 1

let blueButton = document.querySelector ('#blueBtn');
let jumboButton = document.querySelector ('.jumbotron');
let donationButton = document.querySelector ('.jumbotron .buttons .btn-primary');
let volunteerBtnEl = document.querySelector (
  '.jumbotron .buttons .btn-secondary'
);
blueButton.addEventListener ('click', function () {
  jumboButton.style.backgroundColor = `#588fbd`;
  donationButton.style.backgroundColor = `#ffa500`;
  volunteerBtnEl.style.backgroundColor = 'black';
  volunteerBtnEl.style.color = 'white';
});

let orangeBtnEl = document.querySelector ('#orangeBtn');
orangeBtnEl.addEventListener ('click', function () {
  jumboButton.style.color = `#f0ad4e`;
  donationButton.style.backgroundColor = `#5751fd`;
  volunteerBtnEl.style.backgroundColor = `#31b0d5`;
  volunteerBtnEl.style.color = 'white';
});

let greenBtnEl = document.querySelector ('#greenBtn');
greenBtnEl.addEventListener ('click', function () {
  jumboButton.style.backgroundColor = `#87ca8a`;
  donationButton.style.backgroundColor = `black`;
  volunteerBtnEl.style.backgroundColor = `#8c9c08`;
});


//Another type solution with HTML event listener "onclik = " .... ""
// function changeColor(){
//     document.querySelector ('.jumbotron').style.backgroundColor = `#588fbd`;
//     document.querySelector ('.jumbotron .buttons .btn-primary').style.backgroundColor = `#ffa500`;
//     document.querySelector ('.jumbotron .buttons .btn-secondary').style.backgroundColor = 'black';
//     document.querySelector ('.jumbotron .buttons .btn-secondary').style.color = 'white';
// }



//PART 2 



let submitting = document.querySelector ('form button');
submitting.addEventListener ('click', function (x) {
  x.preventDefault ();
  let emailValue = document.getElementById ('exampleInputEmail1');
  let nameValue = document.getElementById ('example-text-input');
  let descriptionValue = document.getElementById ('exampleTextarea');

  if (emailValue.value.length === 0 || !emailValue.value.includes ('@')) {
    emailValue.style.backgroundColor = 'red';
  }
  if (nameValue.value.length === 0) {
    nameValue.style.backgroundColor = 'red';
  }
  if (descriptionValue.value.length === 0) {
    descriptionValue.style.backgroundColor = 'red';
  }
  if (
    emailValue.value.length > 1 &&
    emailValue.value.includes ('@') === true &&
    nameValue.value.length > 0 &&
    descriptionValue.value.length > 0
  ) {
    let formTag = document.querySelector ('form');
    alert ('thank you for filling out the form');
  }
});

// I added reset button , its working with "onclick" 
function myFunction() {
    document.getElementById("myForm").reset();
  }