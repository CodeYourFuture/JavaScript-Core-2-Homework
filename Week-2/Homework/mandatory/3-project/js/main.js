let blueBtn = document.querySelector("#blueBtn"),
     orangeBtn = document.querySelector("#orangeBtn"),
     greenBtn = document.querySelector("#greenBtn");
let jumbotron = document.querySelector(".jumbotron"),
    donateBtn = jumbotron.querySelector(".buttons .btn-primary"),
    volunteerBtn = jumbotron.querySelector(".buttons .btn-secondary");

blueBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#588fbd";
    donateBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
});

orangeBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
});

greenBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#87ca8a";
    donateBtn.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#8c9c08";
});

let email = document.getElementById("exampleInputEmail1"),
    name = document.getElementById("example-text-input"),
    description = document.getElementById("exampleTextarea");
let submitBtn = document.querySelector("form button");

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Ensure that valid fields have a backgroundColor === "white"
    email.style.backgroundColor = (email.value !== "") && (email.value.includes("@")) ? "white" : "red";
    name.style.backgroundColor = (name.value !== "")  ? "white" :  "red";
    description.style.backgroundColor = (description.value !== "") ? "white" : "red";

    // backgroundColor is only white if my field has valid input
    if( (email.style.backgroundColor === "white") && 
         (name.style.backgroundColor === "white") &&
         (description.style.backgroundColor === "white") ) {
            alert("Thank you for filling out the form");
        }
    
    
})