// Write your code here

let catImages = ["https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=983&q=80",
"https://images.unsplash.com/photo-1561389881-a5d8d5549588?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1101&q=80",
"https://images.unsplash.com/photo-1556513583-056edaa0d23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
"https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1042&q=80",
"https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
"https://images.unsplash.com/photo-1570537446001-4d4f8139bac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1561389881-dac6bb97f175?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"];
var counter = 0;
var rcounter=0;
var setAutoBack;
var setAutoForward;
let getImage = document.querySelector("img");
getImage.src = catImages[0];
let forwardButton = document.querySelector(".forwardButton");
forwardButton.addEventListener("click", function(){
    
    counter= rcounter;
    if (counter > catImages.length-2){
        counter=-1;
    }
    counter++;
    getImage.src= catImages[counter];
 
   rcounter =counter;
    console.log(counter);
    document.querySelector("h6").textContent =counter+1;
   
});

let backButton = document.querySelector(".backButton");
backButton.addEventListener("click", function () {
    if (rcounter <= 0) {
        rcounter = catImages.length;

    }
    rcounter--;
    console.log(rcounter);
    getImage.src = catImages[rcounter];
  
    
    document.querySelector("h6").textContent = rcounter+1;
});
let autoForwardButton = document.querySelector(".autoForwardButton");
autoForwardButton.addEventListener("click", function () {
    clearInterval(setAutoBack);
    counter= rcounter;
    
     setAutoForward = setInterval(function(){
         
          
       
     
          console.log(counter);
     
      if (counter > catImages.length - 2) {
         counter = -1;
     }
         counter++;
         getImage.src = catImages[counter];
         document.querySelector("h6").textContent = counter+1;
   },2000);
   
});

let autoBackButton = document.querySelector(".autoBackButton");
autoBackButton.addEventListener("click", function () {
    clearInterval(setAutoForward);
    rcounter= counter;
  
    setAutoBack= setInterval(function () {
      
       
         if (rcounter <= 0) {
        rcounter = catImages.length;

    }
    rcounter--;
    console.log(rcounter);
    getImage.src = catImages[rcounter];
        document.querySelector("h6").textContent = rcounter+1;
    counter=rcounter;
       
    }, 2000);
    

});

let stopButton = document.querySelector(".stopButton");

stopButton.addEventListener("click", function(){
    clearInterval(setAutoForward);
    clearInterval(setAutoBack);
});

