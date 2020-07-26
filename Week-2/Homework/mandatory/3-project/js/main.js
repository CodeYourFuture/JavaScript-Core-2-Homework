let clickBlue = document.querySelector("#blueBtn");
let orangeButton = document.querySelector("#orangeBtn");
let greenButton = document.querySelector("#greenBtn");
let jumbotronCol = document.querySelector(".jumbotron");
let donateBike = document.querySelector("#donate");
let volunteer = document.querySelector(".buttons a");

clickBlue.addEventListener("click", function () {
    jumbotronCol.style.backgroundColor = '#588fbd';
    donateBike.style.backgroundColor = `#ffa500`;

})
//orange button
orangeButton.addEventListener("click", function () {
    jumbotronCol.style.backgroundColor = '#f0ad4e';
    donateBike.style.backgroundColor = `#5751fd`;
    volunteer.style.backgroundColor = '#31b0d5';
    volunteer.style.color = 'white';
})
//green button
greenButton.addEventListener("click", function () {
    jumbotronCol.style.backgroundColor = `#87ca8a`;
    donateBike.style.backgroundColor = `black`;
    volunteer.style.backgroundColor = `#8c9c08`;
})
// function clickFunction() {
//     var inpObj = document.getElementById("out");
//     if (inpObj.checkValidity() == false) {
//         document.getElementById("test").innerHTML = inpObj.validationMessage;
//  if (document.myForm.Name.value == "") {
//      alert("Please provide your name!");
//      document.myForm.Name.focus();
//      return false;
//  }
//  if (document.myForm.EMail.value == "") {
//      alert("Please provide your Email!");
//      document.myForm.EMail.focus();
//      return false;
// //     }
// // }
//      function validateEmail() {
//          var emailID = document.myForm.EMail.value;
//          atpos = emailID.indexOf("@");
//          dotpos = emailID.lastIndexOf(".");
// })
let emailBox = document.querySelector("#exampleInputEmail1");
let name = document.querySelector("#example-text-input");
let describeYourself = document.querySelector("#exampleTextarea")

let submitButton = document.querySelector("form")[3];


submitButton.addEventListener("click", function (event) {
    let inputValid = true;
    if (!emailBox.value.length > 0 || !emailBox.value.includes("@")) {
        emailBox.style.backgroundColor = "red";
        inputValid = false;
    }
    if (!name.value.length > 0) {
        name.style.backgroundColor = "red";
        inputValid = false;
    }
    if (!describeYourself.value.length > 0) {
        describeYourself.style.backgroundColor = "red";
        inputValid = false;

    }
    if (inputValid === true) {
        alert("Thank you for filling out the form");
        emailBox.value = "";
        name.value = "";
        describeYourself.value = "";

    }

    event.preventDefault();
})