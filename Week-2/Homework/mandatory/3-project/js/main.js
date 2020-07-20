let blueBtnEl = document.querySelector("#blueBtn");
blueBtnEl.addEventListener("click", function(e){
    let jumbotronEl = document.querySelector(".jumbotron");
    jumbotronEl.style.backgroundColor = "#588fbd";
    let donateBtnEl = document.querySelector(".buttons").firstElementChild;
    donateBtnEl.style.backgroundColor = "#ffa500";
    let volunteerBtnEl = document.querySelector(".btn-secondary");
    volunteerBtnEl.style.backgroundColor = "black";
    volunteerBtnEl.style.color = "white";
});

let orangeBtnEl = document.querySelector("#orangeBtn");
orangeBtnEl.addEventListener("click", function (e) {
    let jumbotronEl = document.querySelector(".jumbotron");
    jumbotronEl.style.backgroundColor = "#f0ad4e";
    let donateBtnEl = document.querySelector(".buttons").firstElementChild;
    donateBtnEl.style.backgroundColor = "#5751fd";
    let volunteerBtnEl = document.querySelector(".btn-secondary");
    volunteerBtnEl.style.backgroundColor = "#31b0d5";
    volunteerBtnEl.style.color = "white";
});

let greenBtnEl = document.querySelector("#greenBtn");
greenBtnEl.addEventListener("click", function (e) {
    let jumbotronEl = document.querySelector(".jumbotron");
    jumbotronEl.style.backgroundColor = "#87ca8a";
    let donateBtnEl = document.querySelector(".buttons").firstElementChild;
    donateBtnEl.style.backgroundColor = "black";
    let volunteerBtnEl = document.querySelector(".btn-secondary");
    volunteerBtnEl.style.backgroundColor = "#8c9c08";
});