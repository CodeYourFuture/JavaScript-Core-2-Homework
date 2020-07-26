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
  volunteer.style.backgroundColor = "#31b0d5";
  volunteer.style.color = "#ffffff";
});

greenBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateABikeBtn.style.backgroundColor = "black";
  volunteer.style.backgroundColor = "#8c9c08";
  volunteer.style.color = "#ffffff";
});

// Form Validation
const submitBtn = document.querySelector("[type=submit]");
const name = document.querySelector("#example-text-input");
const email = document.querySelector("#exampleInputEmail1");
const describe = document.querySelector("#exampleTextarea");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  //check for email validity
  let emailMatch = "@";
  // Check for non-empty
  if (!email.value.includes(emailMatch) || email.value.length <= 0) {
    alert("Please enter a valid email");
    email.style.backgroundColor = "red";
  }
  if (email.value.length <= 0) {
    alert("Please enter your email");
    email.style.backgroundColor = "red";
  }
  if (name.value.length <= 0) {
    alert("Please enter your name");
    name.style.backgroundColor = "red";
  }
  if (describe.value.length <= 0) {
    alert("Please enter your description");
    describe.style.backgroundColor = "red";
  }

  // check for all fields entered
  if (!email.value == "" && !name.value == "" && !describe.value == "") {
    alert("Thank you for filling the form");
  }

  email.value = "";
  name.value = "";
  describe.value = "";
});
