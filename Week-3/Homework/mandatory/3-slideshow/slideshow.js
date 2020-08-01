// Write your code here
//alert("java");


let images=[//array of objects
    {   key:0,
        src:"https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {   key:1,
        src:"https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {   key:2,
        src:"https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {   key:3,
        src:"https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {   key:4,
        src:"https://images.unsplash.com/photo-1527416876370-fb74d128c3dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {   key:5,
        src:"https://images.unsplash.com/photo-1548366086-7f1b76106622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {   key:6,
        src:"https://images.unsplash.com/photo-1561991524-9eaa9f7d910b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {   key:7,
        src:"https://images.unsplash.com/photo-1519221342713-8cd041ea8893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    }
]
////////////when load webpage
let key=0;
document.querySelector(".img").src=images[0].src;
document.querySelector(".btn-frd").disabled=false;
document.querySelector(".btn-bck").disabled=true;
document.querySelector(".btn-frdAuto").disabled=false;
document.querySelector(".btn-bckAuto").disabled=true;
document.querySelector(".btn-stop").disabled=true;
//////////////////////function to go next slide
let forward=document.querySelector(".btn-frd");
forward.addEventListener("click",function(){
    
    let img=document.querySelector(".img");
    images.forEach(function(each){
        if(each.src===img.src){
           // alert(typeof each.key);
            key=each.key;
            return;
        }else{
            console.log("move")
        }
    });
    if(key+1===images.length){
        document.querySelector(".btn-frd").disabled=true;
        document.querySelector(".btn-frdAuto").disabled=true;
    }else{
    document.querySelector(".img").src=images[key+1].src;
    document.querySelector("span").textContent=key+1;
    document.querySelector(".btn-bck").disabled=false;
    document.querySelector(".btn-bckAuto").disabled=false;
    }
});
//////////////////////function to go previous slide
let backward=document.querySelector(".btn-bck");
backward.addEventListener("click",function(){
   
    let img=document.querySelector(".img");
    images.forEach(function(each){
        if(each.src===img.src){
           // alert(typeof each.key);
            key=each.key;
            return;
        }else{
            console.log("move")
        }
    });
    if(key-1<0){
        document.querySelector(".btn-bck").disabled=true;
        document.querySelector(".btn-bckAuto").disabled=true;
    }else{
    document.querySelector(".img").src=images[key-1].src;
    document.querySelector("span").textContent=key-1;
    document.querySelector(".btn-frd").disabled=false;
    document.querySelector(".btn-frdAuto").disabled=false;
    }
});
///////////////////////////interval used in auto move function
let intervalFrd,intervalBck;
//////////////////////////////auto forward
let autoforward=document.querySelector(".btn-frdAuto");
autoforward.addEventListener("click",function(){
///////////////making all buttne disabled except stop buttonn
document.querySelector(".btn-frd").disabled=true;
document.querySelector(".btn-bck").disabled=true;
document.querySelector(".btn-frdAuto").disabled=true;
document.querySelector(".btn-bckAuto").disabled=true;
document.querySelector(".btn-stop").disabled=false;
/////////////////////////////////////
    let img=document.querySelector(".img");
    images.forEach(function(each){
        if(each.src===img.src){
           // alert(typeof each.key);
            key=each.key;
            return;
        }else{
            console.log("move")
        }
    });
    if(key+1===images.length){
        document.querySelector(".btn-frdAuto").disabled=true;
        document.querySelector(".btn-frd").disabled=true;
        document.querySelector(".btn-bck").disabled=false;
        document.querySelector(".btn-bckAuto").disabled=false;
    }else{
        
       
        // document.querySelector(".btn-bck").disabled=false;
        // document.querySelector(".btn-bckAuto").disabled=false;
        intervalFrd=setInterval(function(){
            if(key+1===images.length){
                document.querySelector(".btn-bckAuto").disabled=false;
                document.querySelector(".btn-bck").disabled=false;
                document.querySelector(".btn-stop").disabled=true;
                clearInterval(intervalFrd);
                return;
            }
                key=key+1;
                document.querySelector(".img").src=images[key].src;
                document.querySelector("span").textContent=key;
                
        },1000);
    }
});
/////////////////////////////auto backward
let autobackward=document.querySelector(".btn-bckAuto");
autobackward.addEventListener("click",function(){
    ///////////////making all buttne disabled except stop buttonn
    document.querySelector(".btn-frd").disabled=true;
    document.querySelector(".btn-bck").disabled=true;
    document.querySelector(".btn-frdAuto").disabled=true;
    document.querySelector(".btn-bckAuto").disabled=true;
    document.querySelector(".btn-stop").disabled=false;
   // document.querySelector(".btn-stop").style.border="0.12rem solid #008000";
    /////////////////////////////////////
        let img=document.querySelector(".img");
        images.forEach(function(each){
            if(each.src===img.src){
               // alert(typeof each.key);
                key=each.key;
                return;
            }else{
                console.log("move")
            }
        });
        if(key-1===-1){
            document.querySelector(".btn-bckAuto").disabled=true;
            document.querySelector(".btn-bck").disabled=true;
            document.querySelector(".btn-frd").disabled=false;
            document.querySelector(".btn-frdAuto").disabled=false;
        }else{
            
           
            // document.querySelector(".btn-bck").disabled=false;
            // document.querySelector(".btn-bckAuto").disabled=false;
            intervalFrd=setInterval(function(){
                if(key-1===-1){
                    document.querySelector(".btn-frdAuto").disabled=false;
                    document.querySelector(".btn-frd").disabled=false;
                    document.querySelector(".btn-stop").disabled=true;
                    clearInterval(intervalFrd);
                    return;
                }
                    key=key-1;
                    document.querySelector(".img").src=images[key].src;
                    document.querySelector("span").textContent=key;
                    
            },1000);
        }
    });
//////////////////////////////////stop
let btnStop=document.querySelector(".btn-stop");
btnStop.addEventListener("click",function(){
    document.querySelector(".btn-frd").disabled=false;
    document.querySelector(".btn-bck").disabled=false;
    document.querySelector(".btn-frdAuto").disabled=false;
    document.querySelector(".btn-bckAuto").disabled=false;
    clearInterval(intervalFrd);
    clearInterval(intervalBck);
   // document.querySelector(".btn-stop").style.border="0.12 solid #db7093";

    document.querySelector(".btn-stop").disabled=true;
})