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
