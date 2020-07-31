// Write your code here

let i = 0;
let imagesArr = [];
let time = 2000;

imagesArr[0]= "images/p-38-lightning.jpg";
imagesArr[1]= "images/pby-catalina.jpg";
imagesArr[2]= "images/pt-17-stearman.jpg";
imagesArr[3]= "images/t-6-texan.jpg";


function changeTheImage (){
    let imageContainer = document.querySelector(".slider");
    imageContainer.src.textContent = imagesArr[i];
    console.log(imageContainer.src.textContent);

    if ( i < imagesArr.length - 1 ){
        i++;
    }else {
        i = 0;
    }
}

let forwardButton = document.querySelector(".forward-button");
forwardButton.addEventListener ("click", changeTheImage);

