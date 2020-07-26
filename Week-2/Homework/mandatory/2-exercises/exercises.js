/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1> 
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 * 
 */

function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  let heading1, heading2;
  arrayOfPeople.forEach((person) => {
      heading1 = document.createElement("h1");
      heading1.innerText = person.name;
      content.appendChild(heading1);
      heading2 = document.createElement("h2");
      heading2.innerText = person.job;
      content.appendChild(heading2);
  });
}

// another approach//
//  function exerciseOne(arrayOfPeople) {
//   let content = document.querySelector("#content");
//   for(let i = 0; i < arrayOfPeople.length; i++) {
//     let heading1 = document.createElement("h1");
//     let heading2 = document.createElement("h2")
//     content.appendChild(heading1).innerHTML = arrayOfPeople[i].name;
//     content.appendChild(heading2).innerHTML = arrayOfPeople[i].job;
//     heading1.style.backgroundColor = "indigo";
//   }
//}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

function exerciseTwo(shopping) {
let content = document.querySelector("#content");
let shoppingList =  document.createElement("ul");
content.appendChild(shoppingList);
shopping.forEach((item) => {
 let eachItem = document.createElement("li");
 eachItem.innerText = item;
 shoppingList.appendChild(eachItem);
});
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/

function exerciseThree(books) {
  // appending the image source from the url was not aligning properly //
  books[0].src = "./img/image1.jpg"
    // "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg"; //
  books[1].src = "./img/image2.jpeg";
    // "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg"; //
  books[2].src = "./img/image3.jpg";
    // "https://images-na.ssl-images-amazon.com/images/I/418M2053aNL.jpg"; //
  
  let contentDiv = document.querySelector("#content");
  let ul = document.createElement("ul");
  contentDiv.appendChild(ul);

  books.forEach((book) => {
    //  create a <p> element
    //Assign textContent with the book title and author
    // append it to the page.
    
    let li = document.createElement("li");
    let p = document.createElement("p");
    let img = document.createElement("img");
    let a = document.createElement("a");
    p.textContent = book.title + " - " + book.author;
    img.src = book.src;
    // img.setAttribute("src", book.src)
    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);
    ul.style.listStyle = "none";
    ul.style.display = "flex";
    li.style.margin = "20px";
    
    if (book.alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
  });
 
}

// Another approach //
// let bookImages = [
//   {
//     title: "The Design of Everyday Things",
//     src: "./img/image1.jpg"
// },
//   {
//     title: "The Most Human Human",
//     src: "./img/image2.jpeg"
// }, 
//   {
//     title: "The Pragmatic Programmer",
//     src: "./img/image3.jpg"
// }
// ];

// function exerciseThree(books) {
//   let content = document.querySelector("#content");
//   ulElement = document.createElement("ul");
//   ulElement.style.listStyle = "none";
//   ulElement.style.display = "flex";
// content.appendChild(ulElement);
// books.forEach((bookItem) => {
//   let imageSrc;
//   let liElement = document.createElement("li");
//   ulElement.appendChild(liElement);
//   let paragraph = document.createElement("p");
//   paragraph.textContent = `${bookItem.title} - ${bookItem.author}`;
//   liElement.appendChild(paragraph);
//   let imageElement = document.createElement("img");
//   bookImages.find(image => {
//     if(image.title === bookItem.title) {
//       imageSrc = image.src;
//     }
//   }) 
// imageElement.src = imageSrc;
// liElement.appendChild(imageElement);
// liElement.style.margin = "20px"
// if(bookItem.alreadyRead) {
//   liElement.style.backgroundColor = "green";
// }
// else {
// liElement.style.backgroundColor = "red";
// }
// })

// }

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
