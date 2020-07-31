//part 1
let blueButton = document.getElementById("blueBtn");
let orangeButton = document.getElementById("orangeBtn");
let greenButton = document.getElementById("greenBtn");

let jumbotron = document.querySelector("div .jumbotron");
let donateBike = document.querySelector(".buttons a");
let volunteer = document.querySelector(".buttons .btn-secondary");

// When clicking blue button
blueButton.addEventListener("click", function () {
  jumbotron.style.backgroundColor = "#588fbd";
  donateBike.style.backgroundColor = "#ffa500";
  volunteer.style.backgroundColor = "black";
  volunteer.style.color = "white";
});

//When clicking the orange button
function actionOnOrangeButton() {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateBike.style.backgroundColor = "#5751fd";
  volunteer.style.backgroundColor = "#31b0d5";
  volunteer.style.color = "white";
}
orangeButton.addEventListener("click", actionOnOrangeButton);

//When clicking the green button
function actionOnGreenButton() {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateBike.style.backgroundColor = "black";
  volunteer.style.backgroundColor = "#8c9c08";
}
greenButton.addEventListener("click", actionOnGreenButton);


//part 2
let submitBtn = document.querySelector("[type=submit]");
let name = document.getElementById("example-text-input");
let email = document.getElementById("exampleInputEmail1");
let describe = document.getElementById("exampleTextarea");

submitBtn.addEventListener("click", function (event) {cd
  event.preventDefault();
  let emailMatch = "@";
  if (!email.value.includes(emailMatch) || email.value.length <= 0) {
    alert("Please enter a valid email");
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
  if (!email.value == "" && !name.value == "" && !describe.value == "") {
    alert("Thank you for filling the form");
  }
  email.value = "";
  name.value = "";
  describe.value = "";
});
