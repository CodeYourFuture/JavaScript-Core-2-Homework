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

 
sub.addEventListener('click', function(e){
        e.preventDefault();
        let test = emailplaceHolder.value.includes('@'); 
        let validEmail = true;
        let validName = true;
        let validDescription = true;
       
        if(test){
            
        }else{
            emailplaceHolder.style.backgroundColor = "red";
            validEmail = false;
        }

        if(nameHolder.value.length > 0 ){
           
        }else{
            validName = false;
            nameHolder.style.backgroundColor = "red";
        }

        if(describeHolder.value.length >0){
               
    
        }else{
            validDescription = false;
            describeHolder.style.backgroundColor = "red";
        }
    
        if(validName && validDescription 
            && validEmail){
                
            alert('Thank you for filling out the form');
        }
    
    
       
        
    
    });

// sub.addEventListener('click', function(e){
//     let test = emailplaceHolder.value.includes('@'); 
    
//     if(nameHolder.value.length > 0 ){
//        if(describeHolder.value.length >0){
//            if(emailplaceHolder > 0 && test === true){  //the code after the && doesnt seem to be working :( (test === true)
//                 alert('Thank you');
//            }else{
//                e.preventDefault();
//                emailplaceHolder.style.backgroundColor = "red";
//            }

//        }else{
//            e.preventDefault();
//            describeHolder.style.backgroundColor = "red";
//        }

//     }else{
//         e.preventDefault();
//         nameHolder.style.backgroundColor = "red";
//     }

//     if(nameHolder.value.length > 0 && describeHolder.value.length > 0 
//         && emailplaceHolder.value.length > 0 ){
            
//         alert('Thank you for filling out the form');
//     }

//     if(emailplaceHolder.value){

//     }
    

// });


//FUNCTION TO CONFIRM EMAIL IS VALID

function emailChecker(arr){
   let arr2 = arr.split('');
    let result = arr2.find(x => x === '@');
    
    if(result === undefined){
        return false;
    }else{
        return true;
    }
 
 };

