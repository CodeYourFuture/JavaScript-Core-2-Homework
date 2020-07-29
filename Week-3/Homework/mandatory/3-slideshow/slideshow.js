// Write your code here

window.onload=function()
{
    var imageSource=[
        " https://images.unsplash.com/photo-1595882625224-eeaced8da8fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        " https://images.unsplash.com/photo-1569531964322-7bced896a6a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        " https://images.unsplash.com/photo-1569165962688-d5ae57b32dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1508269757141-a5eaf8a31ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1432889490240-84df33d47091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1484896104369-90eb48a7596b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

    ];

    let backButton=document.querySelector(".back");
    let forwardButton=document.querySelector(".forward");
    let autoBack=document.querySelector(".auto-back");
    let autoForward=document.querySelector(".auto-forward");
    let stop=document.querySelector(".stop");

    var imageEl=document.querySelector(".image");
    var currentIndex=0;
    var slideshow1;
    var slideshow2;
    var seconds=document.querySelector("#seconds").value; // seconds will be in tens, we need to convert them into milliseconds for setInterval.
    var timer;
    if(seconds > 0)
        timer=second*1000;
    else 
    timer=1000;    

    autoForward.addEventListener("click", function(){
        clearInterval(slideshow2);

         slideshow1=setInterval(function(){
            if(currentIndex <0 || currentIndex >= imageSource.length )
            {
                
                currentIndex=0;
                return;
            }
            console.log(currentIndex);
            imageEl.src=imageSource[currentIndex];
            currentIndex=currentIndex+1;

        },timer);
    });

    autoBack.addEventListener("click", function(){
        clearInterval(slideshow1);

        console.log("autoback index"+ currentIndex);

         slideshow2=setInterval(function(){
            if(currentIndex < 0 || currentIndex >= imageSource.length )
            {
                currentIndex=imageSource.length-1;
            }
            console.log(currentIndex);
            imageEl.src=imageSource[currentIndex];
            currentIndex=currentIndex-1;
        },timer);
    });

    backButton.addEventListener("click",function(){
        clearInterval(slideshow1);
        clearInterval(slideshow2);
        if(currentIndex <= 0)
            return;
        else
        {
            currentIndex=currentIndex-1;
            imageEl.src=imageSource[currentIndex];
        }

    });
    forwardButton.addEventListener("click",function(){
        clearInterval(slideshow1);
        clearInterval(slideshow2);
        if(currentIndex >= imageSource.length -1)
            return
        else{
            currentIndex=currentIndex+1;
            imageEl.src=imageSource[currentIndex];
        }    
        
    });

    stop.addEventListener("click",function(){
        clearInterval(slideshow1);
        clearInterval(slideshow2);
    })
}