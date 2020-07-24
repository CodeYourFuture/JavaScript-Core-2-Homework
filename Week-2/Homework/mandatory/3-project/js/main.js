/* part 1 */

let blueButtonEl = document.getElementById("blueBtn");
let orangeButtonEl = document.getElementById("orangeBtn");
let greenButtonEl = document.getElementById("greenBtn");

function blueButtonFn() {
    let jumbotron = document.getElementsByClassName("jumbotron");
    for(let i = 0; i < jumbotron.length; ++i) {
        jumbotron[i].style.backgroundColor = `#588fbd`;
    }
    
    let donateButton = document.getElementsByClassName("btn btn-primary btn-lrg");
    for(let i = 0; i < donateButton.length; ++i) {
        donateButton[i].style.backgroundColor = `#ffa500`;
    }

    let volunteerButton = document.getElementsByClassName("btn btn-secondary btn-lrg");
    for(let i = 0; i < volunteerButton.length; ++i) {
        volunteerButton[i].style.backgroundColor = `black`;
        volunteerButton[i].style.color = `white`;
    }
}

function orangeButtonFn() {
    let jumbotron = document.getElementsByClassName("jumbotron");
    for(let i = 0; i < jumbotron.length; ++i) {
        jumbotron[i].style.backgroundColor = `#f0ad4e`;
    }
    
    let donateButton = document.getElementsByClassName("btn btn-primary btn-lrg");
    for(let i = 0; i < donateButton.length; ++i) {
        donateButton[i].style.backgroundColor = `#5751fd`;
    }

    let volunteerButton = document.getElementsByClassName("btn btn-secondary btn-lrg");
    for(let i = 0; i < volunteerButton.length; ++i) {
        volunteerButton[i].style.backgroundColor = `#31b0d5`;
        volunteerButton[i].style.color = `white`;
    }
}

function greenButtonFn() {
    let jumbotron = document.getElementsByClassName("jumbotron");
    for(let i = 0; i < jumbotron.length; ++i) {
        jumbotron[i].style.backgroundColor = `#87ca8a`;
    }
    
    let donateButton = document.getElementsByClassName("btn btn-primary btn-lrg");
    for(let i = 0; i < donateButton.length; ++i) {
        donateButton[i].style.backgroundColor = `black`;
    }

    let volunteerButton = document.getElementsByClassName("btn btn-secondary btn-lrg");
    for(let i = 0; i < volunteerButton.length; ++i) {
        volunteerButton[i].style.backgroundColor = `#8c9c08`;
        volunteerButton[i].style.color = `black`;
    }
}

blueButtonEl.addEventListener("click", blueButtonFn);
orangeButtonEl.addEventListener("click", orangeButtonFn);
greenButtonEl.addEventListener("click", greenButtonFn);

/* part 2 */

let submitButtonEl = document.getElementById("submitBtn");
let emailVal = document.getElementById("exampleInputEmail1");
let nameVal = document.getElementById("example-text-input");
let textVal = document.getElementById("exampleTextarea");

function submitButtonFn() {
    event.preventDefault();
    let completedForm = true;

    if(emailVal.value === ""  ||  !emailVal.value.includes("@")) {
        emailVal.style.backgroundColor = "red";
        completedForm = false;
    }
    else{
        emailVal.style.backgroundColor = "white";
    }

    if(nameVal.value === "") {
        nameVal.style.backgroundColor = "red";
        completedForm = false;
    }
    else {
        nameVal.style.backgroundColor = "white";
    }

    if(textVal.value === "") {
        textVal.style.backgroundColor = "red";
        completedForm = false;
    }
    else {
        textVal.style.backgroundColor = "white";
    }

    if(completedForm) {
        alert("Thank you for submitting the form.");
        emailVal.value = "";
        nameVal.value = "";   
        textVal.value = "";
    }
}

submitButtonEl.addEventListener("click", submitButtonFn);