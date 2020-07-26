const blueBtn = document.querySelector("#blueBtn");
const orangeBtn = document.querySelector("#orangeBtn");
const greenBtn = document.querySelector("#greenBtn");
const jumbotron = document.querySelector(".jumbotron");
const donateABikeBtn = document.querySelector(".buttons a");
const volunteer = document.querySelector(".buttons .btn-secondary");
blueBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = "#588FBD";
  donateABikeBtn.style.backgroundColor = "#FFA500";
  volunteer.style.backgroundColor = "#000000";
  volunteer.style.color = "#FFFFFF";
});
orangeBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = "#F0AD4E";
  donateABikeBtn.style.backgroundColor = "#5751FD";
  volunteer.style.backgroundColor = "#31b0d5";
  volunteer.style.color = "#FFFFFF";
});
greenBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = "#87CA8A";
  donateABikeBtn.style.backgroundColor = "black";
  volunteer.style.backgroundColor = "#8C9C08";
  volunteer.style.color = "#FFFFFF";
});

const submitBtn = document.querySelector("[type=submit]");
const name = document.querySelector("#example-text-input");
const email = document.querySelector("#exampleInputEmail1");
const describe = document.querySelector("#exampleTextarea");
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let emailMatch = "@";
    if (!email.value.includes(emailMatch) || (email.value.length <= 0)) {
        alert("Please enter a valid email");
      email.style.backgroundColor = "red";
    };
    if (name.value.length <= 0) {
      alert("Please enter your name");
      name.style.backgroundColor = "red";
    };
    if (describe.value.length <= 0) {
      alert("Please enter your description");
      describe.style.backgroundColor = "red";
      };
    if (
      !email.value == "" &&
      !name.value == "" &&
      !describe.value == "" 
    ) {
      alert("Thank you for filling the form");
    }
    email.value = "";
    name.value = "";
    describe.value = "";
  });