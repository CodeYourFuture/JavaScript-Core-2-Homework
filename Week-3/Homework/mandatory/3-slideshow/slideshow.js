// Write your code here
// let sliderImages =  [
//     '<img src="./img/slider-img1.jpg" alt="" class="slides">',
//     '<img src="./img/slider-img2.jpg" alt="" class="slides">',
//     '<img src="./img/slider-img3.jpg" alt="" class="slides">',
//     '<img src="./img/slider-img4.jpg" alt="" class="slides">',
// ];

window.onload = function () {
  let forwardBtn = document.getElementById("forward");
  let backBtn = document.getElementById("back");
  let sliderImages = document.getElementsByClassName("slides");
  let autoBackBtn = document.getElementById("autoBack");
  let autoForwardBtn = document.getElementById("autoForward");
  let stopBtn = document.getElementById("stop");
  let indexDisplay = document.getElementById("indexDisplay");
  let indexOfVisibleImg = 0;
  let motion;

  showImageAtIndex(0);
  autoBackBtn.addEventListener("click", function () {
    backwards();
    clearInterval(motion);
    motion = setInterval(backwards, 1000);
  });

  backBtn.addEventListener("click", backwards);

  stopBtn.addEventListener("click", function () {
    clearInterval(motion);
  });

  forwardBtn.addEventListener("click", forwards);

  autoForwardBtn.addEventListener("click", function () {
    forwards();
    clearInterval(motion);
    motion = setInterval(forwards, 1000);
  });

  function backwards() {
    indexOfVisibleImg--;
    if (indexOfVisibleImg <= -1) {
      indexOfVisibleImg = sliderImages.length - 1;
    }
    showImageAtIndex(indexOfVisibleImg);
  }
  function forwards() {
    indexOfVisibleImg++;
    showImageAtIndex(indexOfVisibleImg);

    if (indexOfVisibleImg >= sliderImages.length - 1) {
      indexOfVisibleImg = -1;
    }
  }

  function showImageAtIndex(index) {
    for (let i = 0; i < sliderImages.length; i++) {
      if (i === index) {
        sliderImages[i].style.display = "inline-block";
      } else {
        sliderImages[i].style.display = "none";
      }
    }
    indexDisplay.textContent = index;
  }
};
