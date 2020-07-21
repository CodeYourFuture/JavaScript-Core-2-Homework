/*  When clicking **blue** it should change:

  - **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white`
*/

let blueButton = document.getElementById("blueBtn");
    blueButton.addEventListener("click", colorChange);

function colorChange (){
   let jumbotronEl = document.querySelector(".jumbotron");
        jumbotronEl.style.backgroundColor = "#588fbd";
    let donateBikeButton = document.querySelector(".btn.btn-primary.btn-lrg");
        donateBikeButton.style.backgroundColor = "#ffa500";
    let volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");
        volunteerButton.style.backgroundColor = "black";
        volunteerButton.style.color = "white";
}

 /* When clicking **orange** it should change:

  - **Jumbotron** background color to `#f0ad4e`
  - **Donate a bike** button background color to `#5751fd`
  - **Volunteer** button background color to `#31b0d5` and text color to `white`
 */

 let orangeButton = document.getElementById("orangeBtn");
    orangeButton.addEventListener("click", changeColor);

    function changeColor (){
        let jumbotronEl = document.querySelector(".jumbotron");
            jumbotronEl.style.backgroundColor = "#f0ad4e";
        let donateBikeButton = document.querySelector(".btn.btn-primary.btn-lrg");
            donateBikeButton.style.backgroundColor = "#5751fd";
        let volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");
            volunteerButton.style.backgroundColor = "#31b0d5";
            volunteerButton.style.color = "white";
}

/* When clicking **green** it should change:
  - **Jumbotron** background color to `#87ca8a`
  - **Donate a bike** button background color to `black`
  - **Volunteer** button background color to `#8c9c08`
 */

 let greenButton = document.getElementById("greenBtn");
    greenButton.addEventListener("click", changeColor);

    function changeColor (){
        let jumbotronEl = document.querySelector(".jumbotron");
            jumbotronEl.style.backgroundColor = "#87ca8a";
        let donateBikeButton = document.querySelector(".btn.btn-primary.btn-lrg");
            donateBikeButton.style.backgroundColor = "black";
        let volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");
            volunteerButton.style.backgroundColor = "#8c9c08";
            volunteerButton.style.color = "white";
}