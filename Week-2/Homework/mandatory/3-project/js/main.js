//PART 1 : CHANGING WEBSITE THEME

//BLUE BUTTON
let blueButton = document.querySelector("#blueBtn");
blueButton.addEventListener("click", function () {
  let jumbotronEl = document.querySelector(".jumbotron");
  jumbotronEl.style.backgroundColor = "#588fbd";
  let donateBikeBtn = document.querySelector(".buttons .btn-primary");
  donateBikeBtn.style.backgroundColor = "#ffa500";
  let volunteerBtn = document.querySelector(".btn-secondary");
  volunteerBtn.style.backgroundColor = "#000";
  volunteerBtn.style.color = "#fff";
});

//ORANGE BUTTON
let orangeButton = document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", function () {
  let jumbotronEl = document.querySelector(".jumbotron");
  jumbotronEl.style.backgroundColor = "#f0ad4e";
  let donateBikeBtn = document.querySelector(".buttons .btn-primary");
  donateBikeBtn.style.backgroundColor = "#5751fd";
  let volunteerBtn = document.querySelector(".btn-secondary");
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "#fff";
});

//GREEN BUTTON
let greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", function () {
  let jumbotronEl = document.querySelector(".jumbotron");
  jumbotronEl.style.backgroundColor = "#87ca8a";
  let donateBikeBtn = document.querySelector(".buttons .btn-primary");
  donateBikeBtn.style.backgroundColor = "#000";
  let volunteerBtn = document.querySelector(".btn-secondary");
  volunteerBtn.style.backgroundColor = "#8c9c08";
});

//PART 2 : FORM

let emailInput = document.querySelector("#seexampleInputEmail1");
let nameInput = document.querySelector(".form-control");
let selfDescriptionInput = document.querySelector("#exampleTextarea")

console.log(emailInput);
console.log(nameInput);
console.log(selfDescriptionInput);