let blue= document.querySelector("#blueBtn");
let orange=document.querySelector("#orangeBtn");
let green=document.querySelector("#greenBtn");
let jumbotron=document.querySelector(".jumbotron");
let donate=document.querySelector("#donate");
let volunteer= document.querySelector(".buttons a ");

blue.addEventListener("click", function(){
    // console.log("bluebutton");
    volunteer.style.backgroundColor="black";
    volunteer.style.color="white";
    jumbotron.style.backgroundColor= `#588fbd`;
    donate.style.backgroundColor=`#ffa500`;
})

orange.addEventListener("click", function(){
    // console.log("orangebutton");
    volunteer.style.backgroundColor=`#31b0d5`;
    volunteer.style.color="white";
    jumbotron.style.backgroundColor= `#f0ad4e`;
    donate.style.backgroundColor=`#5751fd`;
})

green.addEventListener("click", function(){
    // console.log("orangebutton");
    volunteer.style.backgroundColor=`#8c9c08`;
    jumbotron.style.backgroundColor= `#87ca8a`;
    donate.style.backgroundColor=`black`;
})

sub.addEventListener('click', () => {
    // console.log(nameHolder.value.length);
 
    if(nameHolder.value.length > 0 && describeHolder.value.length > 0){
         alert('Thank you for filling out the form');
    }else{
         nameHolder.style.backgroundColor = "red"; 
         describeHolder.style.backgroundColor = "red";  
    }
 
    if(emailplaceHolder.value.length > 0 ){
       let test =  emailplaceHolder.value.includes(emailChecker);
       if(test === true){
             alert('Thank you for filling out the form');
       }else {
           emailplaceHolder.style.backgroundColor = "red";
       }
 
    }else{
      emailplaceHolder.style.backgroundColor = "red";
    }
 
 
 
 
 });
 
 function emailChecker(string){
      let arr = string.split('');
       let res = arr.find(x => x === '@');
 
       if(res === true){
           return true;
 
       }else {
           return false;
       }
 
 
 };