//The load event fires when a given resource has loaded.

window.onload = function () {
    let imgsrc = document.getElementsByTagName('img');
//The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
    let newImgArr = Array.from(imgsrc);
    let backBtn = document.getElementById('back');
    let forwardBtn = document.getElementById('forward');
  
    // index of visible slide
    let currentIndex = 0;
  
    // show first image on page load
    showImage(currentIndex);
  
    function showImage(index) {
      newImgArr.forEach((image, i) => {
        // hide image when indexes don't match
        if (index !== i) {
          image.style.display = 'none';
        }
         else {
          // display image for currentIndex
          image.style.display = 'inline-block';
        }
      });
    }
  //forward button 
    forwardBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % newImgArr.length;
      showImage(currentIndex);
    });
  // back buttton 
    backBtn.addEventListener('click', () => {
      currentIndex = currentIndex > 0 ? --currentIndex : newImgArr.length - 1;
      showImage(currentIndex);
    });

    let autoBack = document.getElementById("autoBack");
autoBack.addEventListener("click", () => {
    clearInterval(forwardSlide);
    reverseSlide = setInterval(() => {
        img.src = newImgArr[imgIndex];
        imageIndex.textContent = imgIndex;
        imgIndex--;
        if (imgIndex < 0) {
            imgIndex = newImgArr.length - 1;
        }
    },1000);
});
let autoForward = document.getElementById("autoForward");
autoForward.addEventListener("click", () => {
    clearInterval(reverseSlide);
    imgIndex = 0;
    forwardSlide = setInterval(() => {
        img.src = newImgArr[imgIndex];
        imageIndex.textContent = imgIndex;
        imgIndex++;
        if (imgIndex > newImgArr.length - 1) {
            imgIndex = 0;
        }
    }, 1000);
});
  };