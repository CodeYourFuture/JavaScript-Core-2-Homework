// Write your code here
window.onload = function () {
    const imagesNodes = document.getElementsByTagName('img');
    const imagesArray = Array.from(imagesNodes);
    const backBtn = document.getElementById('back');
    const forwardBtn = document.getElementById('forward');

    // index of visible slide
    let currentIndex = 0;

    // show first image on page load
    showImage(currentIndex);

    function showImage(index) {
        imagesArray.forEach((image, i) => {
            // hide image when indexes don't match
            if (index !== i) {
                image.style.display = 'none';
            } else {
                // display image for currentIndex
                image.style.display = 'inline-block';
            }
        });
    }

    forwardBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imagesArray.length;
        showImage(currentIndex);
    });

    backBtn.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? --currentIndex : imagesArray.length - 1;
        showImage(currentIndex);
    });
};