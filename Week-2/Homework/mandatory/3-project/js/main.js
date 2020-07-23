let blueButton = document.querySelector("#blueBtn");
blueButton.addEventListener("click", blueFunction);
function blueFunction() {
	let jumbotron = document.querySelector(".jumbotron");
	jumbotron.style.backgroundColor = "#588fbd";
	let allButtons = document.querySelector(".buttons");
	let donatedBike = allButtons.querySelector("a:first-child");
	donatedBike.style.backgroundColor = "#ffa500";
	let volunteer = allButtons.querySelector("a:last-child");
	volunteer.style.backgroundColor = "#000000";
	volunteer.style.color = "#ffffff";
}
let orangeButton = document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", orangeFunction);
function orangeFunction() {
	let jumbotron = document.querySelector(".jumbotron");
	jumbotron.style.backgroundColor = "#f0ad4e";
	let allButtons = document.querySelector(".buttons");
	let donatedBike = allButtons.querySelector("a:first-child");
	donatedBike.style.backgroundColor = "#5751fd";
	let volunteer = allButtons.querySelector("a:last-child");
	volunteer.style.backgroundColor = "#31b0d5";
	volunteer.style.color = "#ffffff";
}
let greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", greenFunction);
function greenFunction() {
	let jumbotron = document.querySelector(".jumbotron");
	jumbotron.style.backgroundColor = "#87ca8a";
	let allButtons = document.querySelector(".buttons");
	let donatedBike = allButtons.querySelector("a:first-child");
	donatedBike.style.backgroundColor = "#000000";
	let volunteer = allButtons.querySelector("a:last-child");
	volunteer.style.backgroundColor = "#8c9c08";
	//volunteer.style.color = "#ffffff";
}
/*
## Part 2

Just below the buttons, there's a form called **Register with us**.

Continue working in `./js/main.js` to add the following functionality:

When the submit button is pressed, it should check that all the form fields are valid:
*/
let submitForm = document.querySelector("form");
submitForm.setAttribute("name", "myForm");
let submitButton = submitForm.querySelector("button");
submitButton.addEventListener("click", myFunction);
function myFunction() {
	

	let x = document.querySelector("#example-text-input");
	//
	x.setAttribute("name", "example");
	x = document.forms["myForm"]["example"].value;
	if (x == "") {
		//alert("Name must be filled out");
		event((x.style.backgroundColor = "red"));
		return false;
	}

	event.preventDefault();
}

/*


For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields

**Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page.
*/
