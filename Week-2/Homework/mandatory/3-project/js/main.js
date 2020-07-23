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
    let emailEl = document.querySelector("#exampleInputEmail1");
    let nameEl = document.querySelector("#example-text-input");
    let textEl = document.querySelector("#exampleTextarea");
    let validForm1;
    let validForm2;
    let validForm3;
    
    if (emailEl.value.includes("@")) {
        validForm1 = true;
        emailEl.style.backgroundColor = "white";
    } else {
        emailEl.style.backgroundColor = "red";
        validForm1 = false;
    }
    if (nameEl.value.length > 0) {
        validForm2 = true;
        nameEl.style.backgroundColor = "white";
    } else {
        nameEl.style.backgroundColor = "red";
        validForm2 = false;
    }
    if (textEl.value.length > 0) {
        validForm3 = true;
        textEl.style.backgroundColor = "white";
    } else {
        textEl.style.backgroundColor = "red";
        validForm3 = false;
    }

if(validForm1 && validForm2 && validForm3) {
    alert("thank you for filling out the form");
    emailEl.value = "";
    nameEl.value = "";
    textEl.value = "";
}
});