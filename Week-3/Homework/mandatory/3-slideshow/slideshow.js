// Write your code here
let i = 0;
let imgages = [];
imgages[0] = "images/image-1.jpg";
imgages[1] = "images/image-2.jpg";
imgages[2] = "images/image-3.jpg";
imgages[3] = "images/image-4.jpg";
imgages[4] = "images/image-5.jpg";
imgages[5] = "images/image-6.jpg";
let forwardButton = document.querySelector(".forwardBtn");
let displayImage = document.querySelector(".myImages");
function displayNext() {
	forwardButton.style.backgroundColor = "red";
	if (i < imgages.length) {
		displayImage.src = imgages[i];
		i++;
	}
}
forwardButton.addEventListener("click", displayNext);
let backwardButton = document.querySelector(".backwardBtn");
function displayPrevious() {
	if (i > 0 && i <= imgages.length) {
		displayImage.src = imgages[i];
		i--;
	}
}
backwardButton.addEventListener("click", displayPrevious);
let autoForwardBtn = document.querySelector(".autoForwardBtn");
function autoDisplayForward() {
	setInterval(() => {
		if (i < imgages.length) {
			displayImage.src = imgages[i];
			i++;
		}
	}, 3000);
}
autoForwardBtn.addEventListener("click", autoDisplayForward);
let autoBackwardBtn = document.querySelector(".autoBackwardBtn");
function autoDisplayBackward() {
	setInterval(() => {
		if (i > 0 && i <= imgages.length) {
			displayImage.src = imgages[i];
			i--;
		}
	}, 2500);
}
autoBackwardBtn.addEventListener("click", autoDisplayBackward);

