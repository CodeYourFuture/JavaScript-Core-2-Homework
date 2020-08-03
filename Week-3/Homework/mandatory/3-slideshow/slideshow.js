let catIndex1 = 4;
let catIndex2 = 0;
let catRevCount = 4;
let catForCount = 0;
let catReverse;
let catForward;
let catArray = ["images/cat1.jpg", "images/cat2.jpg", "images/cat3.jpg", "images/cat4.jpg"];
let autoRev = document.getElementById("autoRev");
autoRev.addEventListener("click", function () {
    catReverse = setInterval(() => {
        document.getElementById("images").src = catArray[catIndex1];  
        catIndex1--;  
        if(catIndex1 === catArray.length-4) {
            catIndex1 = 4;
        }
    }, 2000);
})
let autoFor = document.getElementById("autoFor");
autoFor.addEventListener("click", function () {
    catForward = setInterval(() => {
        document.getElementById("images").src = catArray[catIndex2];
        catIndex2++;
        if (catIndex2 === 4) {
            catIndex2 = 0;
        }
    }, 2000);
})
