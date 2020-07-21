/************************************************************************************************************* */
                                              /* Part 1 */

var blueBtnEl = document.querySelector ('#blueBtn');
var jumboEl = document.querySelector ('.jumbotron');
var donateBtn = document.querySelector ('.jumbotron .buttons .btn-primary');
var volunteerBtnEl = document.querySelector (
  '.jumbotron .buttons .btn-secondary'
);
blueBtnEl.addEventListener ('click', function () {
  jumboEl.style.backgroundColor = `#588fbd`;
  donateBtn.style.backgroundColor = `#ffa500`;
  volunteerBtnEl.style.backgroundColor = 'black';
  volunteerBtnEl.style.color = 'white';
});

var orangeBtnEl = document.querySelector ('#orangeBtn');
orangeBtnEl.addEventListener ('click', function () {
  jumboEl.style.color = `#f0ad4e`;
  donateBtn.style.backgroundColor = `#5751fd`;
  volunteerBtnEl.style.backgroundColor = `#31b0d5`;
  volunteerBtnEl.style.color = 'white';
});

var greenBtnEl = document.querySelector ('#greenBtn');
greenBtnEl.addEventListener ('click', function () {
  jumboEl.style.backgroundColor = `#87ca8a`;
  donateBtn.style.backgroundColor = `black`;
  volunteerBtnEl.style.backgroundColor = `#8c9c08`;
});

/************************************************************************************************************* */
                                                   /* Part 2 */

var submitEl = document.querySelector ('form button');
submitEl.addEventListener ('click', function (e) {
  e.preventDefault ();
  var emailEl = document.getElementById ('exampleInputEmail1');
  var nameEl = document.getElementById ('example-text-input');
  var descEl = document.getElementById ('exampleTextarea');
  if (emailEl.value.length === 0 || emailEl.value.includes ('@') === false) {
    emailEl.style.backgroundColor = 'red';
  }
  if (nameEl.value.length === 0) {
    nameEl.style.backgroundColor = 'red';
  }
  if (descEl.value.length === 0) {
    descEl.style.backgroundColor = 'red';
  }
  if (
    emailEl.value.length > 0 &&
    emailEl.value.includes ('@') === true &&
    nameEl.value.length > 0 &&
    descEl.value.length > 0
  ) {
    var formEl = document.querySelector ('form');
    formEl.reset ();
    alert ('thank you for filling out the form');
  }
});
