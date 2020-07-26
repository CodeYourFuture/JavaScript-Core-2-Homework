window.onload = function () {
  const imagesNodes = document.getElementsByTagName('img');
  const imagesArray = Array.from(imagesNodes);
  const backBtn = document.getElementById('back');
  const forwardBtn = document.getElementById('forward');
  const autoForwardBtn = document.getElementById('autoForward');
  const autoBackBtn = document.getElementById('autoBack');
  const stopBtn = document.getElementById('stop');
  const slideIndex = document.getElementById('slideIndex');
  let timer;
  let counter = 0;

  // show first image on page load
  showImage(counter);

  function showImage(counter) {
    let index = getIndex(counter);

    imagesArray.forEach((image, i) => {
      // hide image when indexes don't match
      if (index !== i) {
        image.style.display = 'none';
      } else {
        // display image for index
        image.style.display = 'inline-block';
      }
      slideIndex.textContent = index;
    });
  }

  function getIndex(num) {
    // get index of a slide from any number
    if (num >= 0) {
      return num % imagesArray.length;
    } else {
      return (
        (imagesArray.length - (Math.abs(num) % imagesArray.length)) %
        imagesArray.length
      );
    }
  }

  function goBack() {
    counter--;
    showImage(counter);
  }

  function goForward() {
    counter++;
    showImage(counter);
  }

  forwardBtn.addEventListener('click', goForward);
  backBtn.addEventListener('click', goBack);

  autoForwardBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(() => {
      goForward();
    }, 2000);
  });

  autoBackBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(() => {
      goBack();
    }, 2000);
  });

  stopBtn.addEventListener('click', () => {
    clearInterval(timer);
  });
};
