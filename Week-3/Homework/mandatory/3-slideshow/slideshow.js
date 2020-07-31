// Write your code here

let i = 0;
let imagesArr = [];
let time = 2000;

imagesArr[0]= "images/p-38-lightning.jpg";
imagesArr[1]= "images/pby-catalina.jpg";
imagesArr[2]= "images/pt-17-stearman.jpg";
imagesArr[3]= "images/t-6-texan.jpg";


function changeTheImage (){

    if ( i < imagesArr.length - 1 ){
        i++;
    }else {
        i = 0;
    }
    document.querySelector(".slider").src = imagesArr[i];
}

let forwardButton = document.querySelector(".forward-button");
forwardButton.addEventListener ("click", changeTheImage);

