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

let emailInput = document.querySelector("#exampleInputEmail1");
let nameInput = document.querySelector("#example-text-input");
let selfDescriptionInput = document.querySelector("#exampleTextarea");
console.log(emailInput.value.length);
let submitBtn = document.querySelector("form .btn-primary");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  let isValid = true;

  if (!emailInput.value.length > 0 || !emailInput.value.includes("@")) {
    emailInput.style.backgroundColor = "red";
    isValid = false;
  }
  if (!nameInput.value.length > 0) {
    nameInput.style.backgroundColor = "red";
    isValid = false;
  }
  if (!selfDescriptionInput.value.length > 0) {
    selfDescriptionInput.style.backgroundColor = "red";
    isValid = false;
  }

  if (isValid === true) {
    alert("Thank you for filling out the form");
    emailInput.value = "";
    nameInput.value = "";
    selfDescriptionInput.value = "";
  }
});
