const blueBtn = document.querySelector("#blueBtn");
const orangeBtn = document.querySelector("#orangeBtn");
const greenBtn = document.querySelector("#greenBtn");
const jumbotron = document.querySelector(".jumbotron");
const donateABikeBtn = document.querySelector(".buttons a");
const volunteer = document.querySelector(".buttons .btn-secondary");

blueBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = "#588fbd";
  donateABikeBtn.style.backgroundColor = "#ffa500";
  volunteer.style.backgroundColor = "#000000";
  volunteer.style.color = "#ffffff";
});

orangeBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateABikeBtn.style.backgroundColor = "#5751fd";
  volunteer.style.backgroundColor = "##31b0d5";
  volunteer.style.color = "#ffffff";
});

greenBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateABikeBtn.style.backgroundColor = "black";
  volunteer.style.backgroundColor = "#8c9c08`";
  volunteer.style.color = "#ffffff";
});

// Form Validation
const submitBtn = document.querySelector("[type=submit]");
const name = document.querySelector("#example-text-input");
const email = document.querySelector("#exampleInputEmail1");
const describe = document.querySelector("#exampleTextarea");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const emailMatch = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (email.value.length <= 0) {
    alert("Please enter an email");
    email.style.backgroundColor = "red";
  }

  if (name.value.length <= 0) {
    alert("Please enter your name");
    name.style.backgroundColor = "red";
  }

  if (describe.value.length <= 0) {
    alert("Please enter a description");
    describe.style.backgroundColor = "red";
  }

  // if (
  //   email.value.length >= 0 &&
  //   name.value.length >= 0 &&
  //   describe.value.length >= 0
  // ) {
  //   alert("Thank you for filling the form");
  //   name.value = "";
  //   email.value = "";
  //   describe.value = "";
  // }

  //Email Validation
  // if (!email.value.match(emailMatch)) {
  //   alert("Please enter a valid email");
  //    email.style.backgroundColor = "yellow";
  // } else if (
  //   email.value.length >= 0 &&
  //   name.value.length >= 0 &&
  //   describe.value.length >= 0
  // ) {
  //   alert("Thank you for filling the form");
  //   name.value = "";
  //   email.value = "";
  //   describe.value = "";
  // }

  if (email.validity.patternMismatch) {
    alert("Enter Valid Email");
    email.style.backgroundColor = "red";
  }
});
