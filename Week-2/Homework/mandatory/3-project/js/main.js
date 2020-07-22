
var bluebutton = document.getElementById("blueBtn")
var orangeButton=document.getElementById("orangeBtn");
var greenButton=document.getElementById("greenBtn");

function clickButton(jumboColor,donateColor,volunteerColor1,volunteerColor2)
{
    var jumbotron=document.querySelector(".jumbotron");
    jumbotron.style.backgroundColor=jumboColor;

    var buttons=document.querySelector(".buttons");
    var donateBike=buttons.firstElementChild;
    var Volunteer=buttons.lastElementChild;

    donateBike.style.backgroundColor=donateColor;
    Volunteer.style.backgroundColor=volunteerColor1;
    Volunteer.style.color=volunteerColor2;

}


function buttonForBlue()
{
    clickButton(`#588fbd`,`#ffa500`,"black",`white`);
}

function buttonforOrange()
{
    clickButton(`#f0ad4e`,`#5751fd`,`#31b0d5`,`white`);
}

function buttonForGreen()
{
    clickButton(`#87ca8a`,`black`,`#8c9c08`,`white`);
}

bluebutton.addEventListener("click",buttonForBlue);

orangeButton.addEventListener("click",buttonforOrange);

greenButton.addEventListener("click",buttonForGreen);
