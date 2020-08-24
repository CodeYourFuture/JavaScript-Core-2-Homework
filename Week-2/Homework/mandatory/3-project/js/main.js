let blueButton = document.querySelector("#blueBtn");
blueButton.addEventListener("click", function(){
  let jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.backgroundColor = "#588fbd";
  let donateButton = document.querySelector(".buttons").firstElementChild;
  donateButton.style.backgroundColor = "#ffa500";
  let volunteerButton = document.querySelector(".btn-secondary");
  volunteerButton.style.backgroundColor= "black";
  volunteerButton.style.color ="white";

});
let orangeButton = document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", function () {
    let jumbotron = document.querySelector(".jumbotron");
    jumbotron.style.backgroundColor = "#f0ad4e";
    let donateButton = document.querySelector(".buttons").firstElementChild;
    donateButton.style.backgroundColor = "#5751fd";
    let volunteerButton = document.querySelector(".btn-secondary");
    volunteerButton.style.backgroundColor = "#31b0d5";
    volunteerButton.style.color = "white";

});
let greenButton = document.querySelector("#greenBtn");
 greenButton.addEventListener("click", function () {
     let jumbotron = document.querySelector(".jumbotron");
     jumbotron.style.backgroundColor = "#87ca8a";
     let donateButton = document.querySelector(".buttons").firstElementChild;
     donateButton.style.backgroundColor = "black";
     let volunteerButton = document.querySelector(".btn-secondary");
     volunteerButton.style.backgroundColor = "#8c9c08";

 });

let submitButton = document.querySelector("form").lastElementChild;
submitButton.addEventListener("click",function(e){
  e.preventDefault();
   let getForm = document.querySelectorAll(".form-control");
    if (getForm[0].value == "" && getForm[1].value == "" && getForm[2].value == "") {
    
        alert("Please Enter Name , E-mail and also describe yourself");
        return false;
       }
    
   
    else if (getForm[1].value == "" &&  getForm[2].value == "") {
        alert("Please enter name and describe yourself");
        return false;
    }
    else if (getForm[1].value == "") {
        alert("please enter name");
        return false;
    }
    else if (getForm[2].value == "") {
        alert("please describe yourself");
        return false;
    }

       
  
});
