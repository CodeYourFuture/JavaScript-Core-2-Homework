//## Part 1

let blueEl = document.querySelector("#blueBtn");
let orangeEl = document.querySelector("#orangeBtn");
let greenEl = document.querySelector("#greenBtn");
let jumbotron = document.querySelector(".jumbotron");
let donate = document.querySelector("#donate");
let volunteer = document.querySelector("#volunteer");

blueEl.addEventListener("click", function () {
    // console.log("bluebutton");
    volunteer.style.backgroundColor = "black";
    volunteer.style.color = "white";
    jumbotron.style.backgroundColor = `#588fbd`;
    donate.style.backgroundColor = `#ffa500`;
})

orangeEl.addEventListener("click", function () {
    // console.log("orangebutton");
    volunteer.style.backgroundColor = `#31b0d5`;
    volunteer.style.color = "white";
    jumbotron.style.backgroundColor = `#f0ad4e`;
    donate.style.backgroundColor = `#5751fd`;
})

greenEl.addEventListener("click", function () {
    // console.log("orangebutton");
    volunteer.style.backgroundColor = `#8c9c08`;
    jumbotron.style.backgroundColor = `#87ca8a`;
    donate.style.backgroundColor = `black`;
})

//## Part 2
/* 

- The **Your name**, **Email** and **Describe yourself** fields need to be
 non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email** field also check if it contains the `@` character

For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields
*/
var nameEl = document.querySelector("#example-text-input");
var emailEl = document.querySelector("#exampleInputEmail1");
var descriptionEl = document.querySelector("#exampleTextarea");
var form = document.querySelector("form");
var submitEvent = document.querySelector("#submitBtn")

 form.addEventListener('submit', e =>{
     e.preventDefault()
     var counter =0;
     if (nameEl.value.length == 0) {
         nameEl.style.backgroundColor = "red";
     } else{
         counter++;
     }
     if (emailEl.value.length == 0 || !emailEl.value.includes("@")){
         emailEl.style.backgroundColor = "red";
     } else {
         counter++;
     }
     if (descriptionEl.value.length == 0){
         descriptionEl.style.backgroundColor = "red";
     } else {
         counter++;
     }
     if (counter == 3){
         alert("thank you for filling out the form!!");
         form.reset(); 
     }

 })

