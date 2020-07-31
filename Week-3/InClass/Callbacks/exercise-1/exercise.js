/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/

/*
setTimeout(function () {
    document.body.style.backgroundColor = "blue";
}, 5000);
*/

function getRandomColor() {
    let digits = '0123456789abcdef';
    let color = '#'
    for(let i = 0; i < 6; ++i) {
        color += digits[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(function () {
    document.body.style.backgroundColor = getRandomColor();
}, 5000);

