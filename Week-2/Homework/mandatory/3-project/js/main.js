// Part 1:

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

// Part 2:

let submitBtnEl = document.querySelector("form").lastElementChild;
submitBtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    let formEls = document.querySelectorAll(".form-control");
    if (formEls[0].value.includes("@")) {
        validForm1 = true;
    } else {
        formEls[0].style.backgroundColor = "red";
    }
    if (formEls[1].value.length > 0) {
        validForm2 = true;
    } else {
        formEls[1].style.backgroundColor = "red";
    }
    if (formEls[2].value.length > 0) {
        validForm3 = true;
    } else {
        formEls[2].style.backgroundColor = "red";
    }

if(validForm1 && validForm2 && validForm3) {
    alert("thank you for filling out the form");
    formEls[0].value = "";
    formEls[1].value = "";
    formEls[2].value = "";
}
});