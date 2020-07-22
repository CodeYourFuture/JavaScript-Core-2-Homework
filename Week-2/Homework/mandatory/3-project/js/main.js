let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");

let jumbotron = document.querySelector(".jumbotron");
let donateBtn = document.querySelector("a.btn-primary.btn-lrg");
let volonteerBtn = document.querySelector("a.btn-secondary.btn-lrg");

blueBtn.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#588fbd";
  donateBtn.style.backgroundColor = "#ffa500";
  volonteerBtn.style.backgroundColor = "black";
  volonteerBtn.style.color = "white";
});

orangeBtn.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateBtn.style.backgroundColor = "#5751fd";
  volonteerBtn.style.backgroundColor = "#31b0d5";
  volonteerBtn.style.color = "white";
});
greenBtn.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateBtn.style.backgroundColor = "black";
  volonteerBtn.style.backgroundColor = "#8c9c08";
});

let submitBtn = document.querySelector('[type="submit"]');
let emailFild = document.querySelector("#exampleInputEmail1");
let nameFild = document.querySelector("#example-text-input");
let describeFild = document.querySelector("#exampleTextarea");

submitBtn.addEventListener("click", () => {
  event.preventDefault();
  let isValid = true;
  if (!emailFild.value.includes("@")) {
    emailFild.style.backgroundColor = "red";
    isValid = isValid && false;
  } else {
    emailFild.style.backgroundColor = "white";
    isValid = isValid && true;
  }

  if (!nameFild.value.length) {
    nameFild.style.backgroundColor = "red";
    isValid = isValid && false;
  } else {
    nameFild.style.backgroundColor = "white";
    isValid = isValid && true;
  }

  if (!describeFild.value) {
    describeFild.style.backgroundColor = "red";
    isValid = isValid && false;
  } else {
    describeFild.style.backgroundColor = "white";
    isValid = isValid && true;
  }

  if (isValid) {
    alert("Thank you for filling out the form!");
    emailFild.value = "";
    nameFild.value = "";
    describeFild.value = "";
  }
});
