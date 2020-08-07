/* clicking blue */

let blueButton = document.getElementById("blueBtn");
let jumbotron = document.querySelector(".jumbotron");
let donateBikeButton = document.querySelector(".buttons a:first-of-type");
let volunteerbtn = document.querySelector(".buttons a:last-of-type");
let onBlueButtonClick = function () {
  jumbotron.style.backgroundColor = `#588fbd`;
  donateBikeButton.style.backgroundColor = "#ffa500";
  volunteerbtn.style.backgroundColor = "black";
  volunteerbtn.style.color = "white";
};
blueButton.addEventListener("click", onBlueButtonClick);

/* Clicking orange */

let orangeButton = document.getElementById("orangeBtn");

let onOrangeButtonClick = function () {
  jumbotron.style.backgroundColor = `#f0ad4e`;
  donateBikeButton.style.backgroundColor = "#5751fd";
  volunteerbtn.style.backgroundColor = "#31b0d5";
  volunteerbtn.style.color = "white";
};
orangeButton.addEventListener("click", onOrangeButtonClick);

/* Clicking Green */

let greenButton = document.getElementById("greenBtn");

let onGreenButtonClick = function () {
  jumbotron.style.backgroundColor = `#87ca8a`;
  donateBikeButton.style.backgroundColor = "black";
  volunteerbtn.style.backgroundColor = "#8c9c08";
};
greenButton.addEventListener("click", onGreenButtonClick);

/*   Validate User */

let inputEmail = document.getElementById("exampleInputEmail1");
let inputName = document.getElementById("example-text-input");
let description = document.getElementById("exampleTextarea");
let submitButton = document.querySelector("form button");

let validateUser = function (e) {
  e.preventDefault();
  let emailValue = inputEmail.value;
  let nameValue = inputName.value;
  let descriptionValue = description.value;
  if (emailValue.trim() === "" || emailValue.includes("@") === false) {
    inputEmail.style.backgroundColor = "red";
  } else {
    inputEmail.style.backgroundColor = "white";
  }

  if (nameValue.trim() === "") {
    inputName.style.backgroundColor = "red";
  } else {
    inputName.style.backgroundColor = "white";
  }

  if (descriptionValue.trim() === "") {
    description.style.backgroundColor = "red";
  } else {
    description.style.backgroundColor = "white";
  }

  if (
    descriptionValue.trim() !== "" &&
    nameValue.trim() !== "" &&
    emailValue.trim() !== "" &&
    emailValue.includes("@") === true
  ) {
    alert("Thanks mate");
  }
};
submitButton.addEventListener("click", validateUser);
