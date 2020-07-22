
var bluebutton = document.getElementById("blueBtn")

function clickBlueButton()
{
    var jumbotron=document.querySelector(".jumbotron");
    jumbotron.style.backgroundColor=`#588fbd`;

    var buttons=document.querySelector(".buttons");
    var donateBike=buttons.firstElementChild;
    var Volunteer=buttons.lastElementChild;

    donateBike.style.backgroundColor=`#ffa500`;
    Volunteer.style.backgroundColor="black";
    Volunteer.style.color=`white`;


}

bluebutton.addEventListener("click",clickBlueButton)






