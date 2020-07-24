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
 *      ....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  // let h1El = document.createElement("h1");
  // let h2El = document.createElement("h2");
  arrayOfPeople.forEach(arr=>{
    let h1El = document.createElement("h1");
    let h2El = document.createElement("h2");
    h1El.textContent = arr.name
    h2El.textContent = arr.job
    content.appendChild(h1El);
    content.appendChild(h2El);
  })  
  
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  let shopContent = document.getElementById("content");
  let ulElement = document.createElement("ul");
  shopContent.appendChild(ulElement);
  //console.log(shopContent)

  shopping.forEach(shopItem => {
    let liElement = document.createElement("li");
    //let arrItem = document.createTextNode(shopItem);
    liElement.textContent = shopItem
    //liElement.appendChild(arrItem);
    

    ulElement.appendChild(liElement);
  });
}

// var liEl2 = document.createElement("li");
// liEl2.textContent = "sugar";
// var liEl3 = document.createElement("li");
// liEl3.textContent = "lettuce";
// ulEl.appendChild(liEl1);
// ulEl.appendChild(liEl2);
// ulEl.appendChild(liEl3);

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
  //Write your code in here

  // imgSrc =[
  //   "img/The Design of Everyday Things.jpg","img/The Most Human Human.jpg","img/The Pragmatic Programmer.jpg"]

  let contentDiv = document.getElementById("content");
  let ulElement = document.createElement("ul");
  contentDiv.appendChild(ulElement);

  books.forEach(booksElement => {
    let li = document.createElement("li");
    ulElement.appendChild(li);
    let pElement = document.createElement("p");
    pElement.textContent = booksElement.title + " - " + booksElement.author;
    let img = document.createElement("img");
    
    //console.log(booksElement.imgSrc) 
    li.appendChild(pElement);
    li.appendChild(img);
    li.style.listStyleType = "none"
    if (booksElement.alreadyRead) {
      li.style.backgroundColor = "green"
    } else
      li.style.backgroundColor = "red";

    img.src = `img/${booksElement.toString()}.jpg`
    
     });
  
}

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
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

exerciseThree(books);
