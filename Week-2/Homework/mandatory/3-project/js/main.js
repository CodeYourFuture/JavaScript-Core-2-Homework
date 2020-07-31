//part one of homework

let blueBtn = document.getElementById("blueBtn");
let orangeBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");

let jumbo = document.querySelector(".jumbotron");
let donateBtn = document.querySelector(".buttons .btn-primary");
let volunteerBtn = document.querySelector(".buttons .btn-secondary");

blueBtn.addEventListener("click", function () {
  jumbo.style.backgroundColor = "#588fbd";
  donateBtn.style.backgroundColor = "#ffa500";
  volunteerBtn.style.backgroundColor = "#000000";
  volunteerBtn.style.color = "#ffffff";
});

orangeBtn.addEventListener("click", function () {
  jumbo.style.backgroundColor = "#f0ad4e";
  donateBtn.style.backgroundColor = "#5751fd";
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "#ffffff";
});

greenBtn.addEventListener("click", function () {
  jumbo.style.backgroundColor = "#87ca8a";
  donateBtn.style.backgroundColor = "#000000";
  volunteerBtn.style.backgroundColor = "#8c9c08";
});

//part two of homework

let emailInput = document.getElementById("exampleInputEmail1");
let nameInput = document.getElementById("example-text-input");
let description = document.getElementById("exampleTextarea");
let submitBtn = document.querySelector("form button");

let validateUser = function (e) {
  e.preventDefault();
  let emailValue = emailInput.value;
  let nameValue = nameInput.value;
  let descriptionValue = description.value;
  if (emailValue.trim() === "" || emailValue.includes("@") === false) {
    emailInput.style.backgroundColor = "red";
  } else {
    emailInput.style.backgroundColor = "white";
  }

  if (nameValue.trim() === "") {
    nameInput.style.backgroundColor = "red";
  } else {
    nameInput.style.backgroundColor = "white";
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
    alert("Thank you for filling out the form!");
  }
};
submitBtn.addEventListener("click", validateUser);
