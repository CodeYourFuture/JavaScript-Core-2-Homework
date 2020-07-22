/*  When clicking **blue** it should change:

  - **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white`
*/

let blueButton = document.getElementById("blueBtn");
    blueButton.addEventListener("click", colorChange);

function colorChange (){
   let jumbotronEl = document.querySelector(".jumbotron");
        jumbotronEl.style.backgroundColor = "#588fbd";
    let donateBikeButton = document.querySelector(".btn.btn-primary.btn-lrg");
        donateBikeButton.style.backgroundColor = "#ffa500";
    let volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");
        volunteerButton.style.backgroundColor = "black";
        volunteerButton.style.color = "white";
}

 /* When clicking **orange** it should change:

  - **Jumbotron** background color to `#f0ad4e`
  - **Donate a bike** button background color to `#5751fd`
  - **Volunteer** button background color to `#31b0d5` and text color to `white`
 */
let orangeButton = document.getElementById("orangeBtn");
    orangeButton.addEventListener("click", coloring);

function coloring (){
   let jumbotronEl = document.querySelector(".jumbotron");
        jumbotronEl.style.backgroundColor = "#f0ad4e";
    let donateBikeButton = document.querySelector(".btn.btn-primary.btn-lrg");
        donateBikeButton.style.backgroundColor = "#5751fd";
    let volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");
        volunteerButton.style.backgroundColor = "#31b0d5";
        volunteerButton.style.color = "white";
}

/* When clicking **green** it should change:
  - **Jumbotron** background color to `#87ca8a`
  - **Donate a bike** button background color to `black`
  - **Volunteer** button background color to `#8c9c08`
 */

 let greenButton = document.getElementById("greenBtn");
    greenButton.addEventListener("click", newColor);

    function newColor (){
        let jumbotronEl = document.querySelector(".jumbotron");
            jumbotronEl.style.backgroundColor = "#87ca8a";
        let donateBikeButton = document.querySelector(".btn.btn-primary.btn-lrg");
            donateBikeButton.style.backgroundColor = "black";
        let volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");
            volunteerButton.style.backgroundColor = "#8c9c08";
}


/* When the submit button is pressed, it should check that all the form fields are valid:

- The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email** field also check if it contains the `@` character

For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields

**Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
 */

 let buttonPressed = document.querySelector("form")[3];
 console.log(buttonPressed);

 buttonPressed.addEventListener("click", checkValidity);

 function checkValidity(){
    event.preventDefault();
    let inPutEmailAddress= document.getElementById("exampleInputEmail1");
    let inPutName = document.getElementById("example-text-input");
    let inPutDescribeYourself = document.getElementById("exampleTextarea");

    console.log("exampleInputEmail1" + inPutEmailAddress.value );

    if ( inPutEmailAddress.value.length > 0 && inPutEmailAddress.value.includes("@") && inPutName.value.length > 0 && inPutDescribeYourself.value.length > 0){
        alert("Thank you for filling the form correctly");
    } else {
        inPutEmailAddress.style.backgroundColor = "red";
        inPutName.style.backgroundColor = "red";
        inPutDescribeYourself.style.backgroundColor = "red";
    }
 }
