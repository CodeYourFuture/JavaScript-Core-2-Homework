
const container = document.querySelector(".img-slider");

const imgSlider = document.querySelectorAll(".img-slider img");

const previousBtn = document.querySelector("#previousBtn");
const forwardBtn = document.querySelector("#forwardBtn");
let counter = 1;
const size = imgSlider[0].clientWidth;
container.style.transform = `translateX(`+ (-size *counter) + `px)`;

forwardBtn.addEventListener("click", ()=>{
    if(counter >= imgSlider.length -1) return;
    container.style.transition = "transform 0.4s ease-in-out";
    counter++;
    
    container.style.transform = `translateX(`+ (-size *counter) + `px)`;
})

previousBtn.addEventListener("click", ()=>{
    if(counter <= 0) return;
    container.style.transition = "transform 0.4s ease-in-out";
    counter--;
    
    container.style.transform = `translateX(`+ (-size *counter) + `px)`;
})

container.addEventListener('transitionend', ()=> {
  
    if(imgSlider[counter].id === 'lastClone'){
        container.style.transition = "none";
        counter = imgSlider.length - 2;
        container.style.transform = `translateX(`+ (-size *counter) + `px)`;
    }
    if(imgSlider[counter].id === 'firstClone'){
        container.style.transition = "none";
        counter = imgSlider.length - counter;
        container.style.transform = `translateX(`+ (-size *counter) + `px)`;
    }
        
        
    });