//SELECTORS
let blue = document.querySelector('#blueBtn');
let jumbo = document.querySelector('.jumbotron');
let donateBtn = document.querySelector('#donate');
let volunteerBtn = document.querySelector('#volunteer');

let orange = document.querySelector('#orangeBtn');
let green = document.querySelector('#greenBtn');

let sub = document.querySelector('#submitBtn');
let emailplaceHolder = document.querySelector('#exampleInputEmail1');
let nameHolder = document.querySelector('#example-text-input');
let describeHolder = document.querySelector('#exampleTextarea');
 


//EVENT LISTENERS 
blue.addEventListener('click', () => {
    jumbo.style.backgroundColor = "#588fbd";
    donateBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
    
});
    
orange.addEventListener('click', () => {
    jumbo.style.backgroundColor = "#f0ad4e";
    donateBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
});

green.addEventListener('click', () => {
    jumbo.style.backgroundColor = "#87ca8a";
    donateBtn.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#8c9c08";
});

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