// Write your code here
// Write your code here
let autoBackward;
let autoForward;
document.querySelector(".autoForward").addEventListener("click", function () {
	autoForward = setInterval(function () {
		const currentImage = document.querySelector(".show");
		const nextImage = currentImage.nextElementSibling;
		if (nextImage.heigth !== 0) {
			currentImage.classList.remove("show");
			nextImage.classList.add("show");
		}
	}, 2000);
	const currentImage = document.querySelector(".show");
	const nextImage = currentImage.nextElementSibling;
	if (nextImage.heigth !== 0) {
		currentImage.classList.remove("show");
		nextImage.classList.add("show");
	}
});
document.querySelector(".pauseForward").addEventListener("click", function () {
	clearInterval(autoForward);
});
document.querySelector(".autoBackward").addEventListener("click", function () {
	autoBackward = setInterval(function () {
		const currentImage = document.querySelector(".show");
		const previousImage = currentImage.previousElementSibling;
		if (previousImage.heigth !== 0) {
			currentImage.classList.remove("show");
			previousImage.classList.add("show");
		}
	}, 2000);
	const currentImage = document.querySelector(".show");
	const nextImage = currentImage.nextElementSibling;
	if (nextImage.heigth !== 0) {
		currentImage.classList.remove("show");
		nextImage.classList.add("show");
	}
});
document.querySelector(".pauseBack").addEventListener("click", function () {
	clearInterval(autoBackward);
});
document.querySelector(".next").addEventListener("click", function () {
	const currentImage = document.querySelector(".show");
	const nextImage = currentImage.nextElementSibling;
	if (nextImage.heigth !== 0) {
		currentImage.classList.remove("show");
		nextImage.classList.add("show");
	}
});

document.querySelector(".prev").addEventListener("click", function () {
	const currentImage = document.querySelector(".show");
	const previousImage = currentImage.previousElementSibling;
	if (previousImage.heigth !== 0) {
		currentImage.classList.remove("show");
		previousImage.classList.add("show");
	}
});
