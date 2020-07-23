// When clicking **blue** it should change:

let blueBtnEl = document.querySelector('#blueBtn');

let onBlueBtnClick = function() {
    document.querySelector('.jumbotron').style.backgroundColor = '#588fbd';
    document.querySelector('.btn-primary.btn-lrg').style.backgroundColor = '#ffa500';
    document.querySelector('.btn-secondary.btn-lrg').style.backgroundColor = '#000000';
    document.querySelector('.btn-secondary.btn-lrg').style.color = '#ffffff';
}

blueBtnEl.addEventListener('click', onBlueBtnClick);

// When clicking **orange** it should change:

let orangeBtnEL = document.querySelector('#orangeBtn');

let onOrangeBtnClick = function() {
    document.querySelector('.jumbotron').style.backgroundColor = '#f0ad4e';
    document.querySelector('.btn-primary.btn-lrg').style.backgroundColor = '#5751fd';
    document.querySelector('.btn-secondary.btn-lrg').style.backgroundColor = '#31b0d5';
    document.querySelector('.btn-secondary.btn-lrg').style.color = '#ffffff';
}

orangeBtnEL.addEventListener('click', onOrangeBtnClick);

// When clicking **green** it should change:

let greenBtnEL = document.querySelector('#greenBtn');

let onGreenBtnClick = function() {
    document.querySelector('.jumbotron').style.backgroundColor = '#87ca8a';
    document.querySelector('.btn-primary.btn-lrg').style.backgroundColor = '#000000';
    document.querySelector('.btn-secondary.btn-lrg').style.backgroundColor = '#8c9c08';
}

greenBtnEL.addEventListener('click', onGreenBtnClick);

// validate form https://www.tutorialspoint.com/javascript/javascript_form_validations.htm

let submitBtnEl = document.querySelector('.btn.btn-primary');

let onSubmitBtnClick = function() {
    let emailField = document.querySelector('#exampleInputEmail1').value;
    let nameField = document.querySelector('#example-text-input').value;
    let describeField = document.querySelector('#exampleTextarea').value;

    if (emailField < 0) {
        document.querySelector('#exampleInputEmail1').style.backgroundColor = '#FF0000';
    }
    if (nameField < 0) {
        document.querySelector('#example-text-input').style.backgroundColor = '#FF0000';
    }
    if (describeField < 0) {
        document.querySelector('#exampleTextarea').style.backgroundColor = '#FF0000';
    }
    event.preventDefault();
}

submitBtnEl.addEventListener('click', onSubmitBtnClick);