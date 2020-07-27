// Write your code here

window.onload=function()
{
    var imageSource=[
        "https://images.unsplash.com/photo-1595589981991-7f37459639c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1595100930017-8d4112e87959?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1595024600400-2a49b9fce270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1508269757141-a5eaf8a31ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1432889490240-84df33d47091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1484896104369-90eb48a7596b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

    ];

    let backButton=document.querySelector(".back");
    let forwardButton=document.querySelector(".forward");

    var imageEl=document.querySelector(".image");
    var currentIndex=0;

    backButton.addEventListener("click",function(){
        if(currentIndex <= 0)
            return;
        else
        {
            currentIndex=currentIndex-1;
            imageEl.src=imageSource[currentIndex];
        }


    });
    forwardButton.addEventListener("click",function(){
        if(currentIndex >= imageSource.length -1)
            return
        else{
            currentIndex=currentIndex+1;
            imageEl.src=imageSource[currentIndex];
        }    
        
    });
}