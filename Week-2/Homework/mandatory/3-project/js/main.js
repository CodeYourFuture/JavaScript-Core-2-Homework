
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





var id=document.getElementById("exampleInputEmail1");
var nameEl=document.getElementById("example-text-input");
var describe=document.getElementById("exampleTextarea");
var submit=document.querySelector("form button");


function checkAllDetails(e)
{
    e.preventDefault();
    // nameEl.style.backgroundColor="red";


     if(!id.value || !nameEl.value || !describe.value)
    {
       
        if(!id.value)
        id.style.backgroundColor="red";
        if(!nameEl.value)
        nameEl.style.backgroundColor="red";
        if(!describe.value)
        describe.style.backgroundColor="red";

        alert("Enter all the required details");
    }

    else if(!id.value.includes("@")){
        alert("Email Id must contain @");
        id.style.backgroundColor="red";
    }
    else
    alert("Thank you for filling out the form");


    document.querySelector("form").reset();
    
}

function resetWhite()
{
    id.style.backgroundColor="white";
    nameEl.style.backgroundColor="white";
    describe.style.backgroundColor="white";
}

submit.addEventListener("click",checkAllDetails);
id.addEventListener("mouseover",resetWhite);
