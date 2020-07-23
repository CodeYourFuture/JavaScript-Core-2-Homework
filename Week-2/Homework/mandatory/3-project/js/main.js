//When clicking **blue** it should change:
let blueBtn=document.getElementById("blueBtn");
blueBtn.addEventListener("click",function(){
    document.querySelector(".Jumbotron").style.backgroundColor="#588fbd";
    document.querySelector(".btn-lrg").style.backgroundColor="#ffa500";
    document.querySelector(".btn-secondary").style.backgroundColor="black";

});
//- When clicking **orange** it should change:
let orangeBtn=document.getElementById("orangeBtn");
orangeBtn.addEventListener("click",function(){
    document.querySelector(".Jumbotron").style.backgroundColor="#f0ad4e";
    document.querySelector(".btn-lrg").style.backgroundColor="#5751fd";
    document.querySelector(".btn-secondary").style.backgroundColor="#31b0d5";

});
//- When clicking **green** it should change:
let greenBtn=document.getElementById("greenBtn");
greenBtn.addEventListener("click",function(){
    document.querySelector(".Jumbotron").style.backgroundColor="#87ca8a";
    document.querySelector(".btn-lrg").style.backgroundColor="black";
    document.querySelector(".btn-secondary").style.backgroundColor="#8c9c08";

});
//## Part 2
let submit=document.querySelector(".submit");
let email=document.getElementById("exampleInputEmail1");
let name=document.getElementById("example-text-input");
let txtarea=document.getElementById("exampleTextarea");
 
submit.addEventListener("click",function(){
    let e,n,t;
    e=false;
    n=false;
    t=false;
    event.preventDefault();
   console.log(email.value);
   
    if(email.value.length===0 || !email.value.includes("@")){
       // alert(email.textContent.includes("@"));
        email.style.backgroundColor="red";
        email.style.color="white";
        email.value="please enter valid";
    }else{e=true;}
    if(name.value.length===0){
       name.style.backgroundColor="red"; 
       name.style.color="white";
    }else{n=true;}
    if(txtarea.value.length===0){
        txtarea.style.backgroundColor="red";
        txtarea.style.color="white";
    }else{t=true;}
    if(e===true && n===true && t===true){
        alert("thank you for filling out the form");
    }
  console.log(email.value.length);
  console.log(name.value.length);
  console.log(txtarea.value.length);
})
//console.log(email.value.length);
//submit.style.backgroundColor="red";