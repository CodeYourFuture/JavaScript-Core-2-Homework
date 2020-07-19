// Rody Kirwan Wed 15 Jul 20 meeting

function addition(a, b) {
    return a + b;
}

function printName(firstName, lastName, callback) {
    callback(firstName, lastName);
}

printName(Patrick, Chan, addition);

function getGrade(num) {
    if (num >= 70) {
        return "First class";
    }
    if (num <= 69 && num >= 50) {
        return "Second class";
    }
    if (num <= 39 && num >= 0) {
        return "Third class";
    }
}


for(let i = 0; i < 10; i++) {
    if (i < 10 && i > 0) {
        console.log(i);
    }
}


let tech = ['html', 'css', 'javascript', 'react'];
tech.forEach();
