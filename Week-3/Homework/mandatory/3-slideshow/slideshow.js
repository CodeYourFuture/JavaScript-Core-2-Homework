// Write your code here
let catIndex1 = 6;
let catIndex2 = 0;
let catRevCount = 6;
let catForCount = 0;
let catReverse;
let catForward;
let catArray = ["images/cat1.png", "images/cat2.png", "images/cat3.png", "images/cat4.png", "images/cat5.png", "images/cat6.png"];

let autoRev = document.getElementById("autoRev");
autoRev.addEventListener("click", () => {
    catReverse = setInterval(() => {
        
        document.getElementById("images").src = catArray[catIndex1];  
        catIndex1--;  
        if(catIndex1 === 0) {
            catIndex1 = 6;
        }
    }, 2000);
    
})

let autoFor = document.getElementById("autoFor");
autoFor.addEventListener("click", () => {
    catForward = setInterval(() => {

        document.getElementById("images").src = catArray[catIndex2];
        catIndex2++;
        if (catIndex2 === 6) {
            catIndex2 = 0;
        }
    }, 2000);

})

let back = document.getElementById("back");
back.addEventListener("click", () => {

    setTimeout(() => {
        document.getElementById("images").src = catArray[catRevCount];
        if (catRevCount === 0) {
            catRevCount = 6;
        }      
    }, 500);
  catRevCount--;
});

let forward = document.getElementById("forward");
forward.addEventListener("click", () => {

    setTimeout(() => {
        document.getElementById("images").src = catArray[catForCount];
        if (catForCount > 5) {
            catForCount = 0;
        }
    }, 500);
    catForCount++;
})

let stopImages = document.getElementById("stop");
stopImages.addEventListener("click", () => {
    clearInterval(catForward);
    clearInterval(catReverse);
});

