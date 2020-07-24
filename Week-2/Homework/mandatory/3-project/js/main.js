/**
 Project Part-1
 * 
 */
/**
           Part-1: A
 */
//Targeting the blue button
let blueButton = document.querySelector("#blueBtn");
//Targeting the orange button
let orangeButton = document.querySelector("#orangeBtn");
// Targeting the green button
let greenButton = document.querySelector("#greenBtn");
//Targeting the jumbotron
let jumbotron = document.querySelector(".jumbotron");
//Targeting all buttons in the jumbotron
let allButtons = document.querySelector(".buttons");
// First button of the jumbotron
let donatedBike = allButtons.querySelector("a:first-child");
// Last child button of the jumbotron
let volunteer = allButtons.querySelector("a:last-child");
// creating an event if blue button clicked
blueButton.addEventListener("click", blueFunction);
//Function implemented when blue button is clicked
function blueFunction() {
	//Changin the jumbotron background colour
	jumbotron.style.backgroundColor = "#588fbd";
	//Changing the background color of the firs child button when the blue button is clicked
	donatedBike.style.backgroundColor = "#ffa500";
	// Changing the background colour when the blue button is clicked
	volunteer.style.backgroundColor = "#000000";
	// Changing the text color of volunteer button
	volunteer.style.color = "#ffffff";
}
/**
          Part-1: B
 */

// creating an event if the orange button clicked
orangeButton.addEventListener("click", orangeFunction);
function orangeFunction() {
	//let jumbotron = document.querySelector(".jumbotron");
	jumbotron.style.backgroundColor = "#f0ad4e";
	//Changing the background color of the firs child button when the orange button is clicked
	donatedBike.style.backgroundColor = "#5751fd";
	// Changing the background colour when the orange button is clicked
	volunteer.style.backgroundColor = "#31b0d5";
	// Changing the text color of volunteer button
	volunteer.style.color = "#ffffff";
}
/**
            Part-1: C
 */
greenButton.addEventListener("click", greenFunction);
function greenFunction() {
	// Changing the background colour of jumbotron
	jumbotron.style.backgroundColor = "#87ca8a";
	//Changing the background color of the firs child button when the green button is clicked
	donatedBike.style.backgroundColor = "#000000";
	// Changing the background colour when the green button is clicked
	volunteer.style.backgroundColor = "#8c9c08";
}
/*####################################################*/
/*
                             Part 2
*/
let validatEmail, validateName, validateText;
let submitButton = document.querySelector("form button");
//console.log(submitButton);
submitButton.addEventListener("click", function (event) {
	// Adding prevent default functionto prevent the page from refreshing when the submit button is clicked
	event.preventDefault();
	//Targeting the email element in the form
	let inputEmailElement = document.querySelector("#exampleInputEmail1");
	// Targeting the name element in the form
	let inputNameElement = document.querySelector("#example-text-input");
	// Targeting the text area of the form
	let inputTextElement = document.querySelector("#exampleTextarea");
	// A condition to check if an email cretaria is met
	if (
		inputEmailElement.value.length > 0 &&
		inputEmailElement.value.includes("@" && ".")
	) {
		// If the above condtion is met then accept the data
		validatEmail = true;
	} else {
		//if the condition is not met do the following
		inputEmailElement.style.backgroundColor = "red";
		validatEmail = false;
	}
	if (inputNameElement.value.length > 0) {
		validateName = true;
	} else {
		inputNameElement.style.backgroundColor = "red";
		validateName = false;
	}
	if (inputTextElement.value.length > 0) {
		validateText = true;
	} else {
		inputTextElement.style.backgroundColor = "#ff0000";
		validateText = false;
	}
	if (validatEmail && validateName && validateText) {
		alert("Thanks you for filling the form");
		inputEmailElement.value = "";
		inputNameElement.value = "";
		inputTextElement.value = "";
	}
});
