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
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((person) => {
    h1 = document.createElement("h1");
    h2 = document.createElement("h2");
    h1.textContent = person.name;
    h2.textContent = person.job;
    content.appendChild(h1);
    content.appendChild(h2);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let contentDiv = document.getElementById("content");
  // create Element of unordered list inside div
  let list = document.createElement("ul");
  contentDiv.appendChild(list);

  shopping.forEach((shoppingItem) => {
    let li = document.createElement("li");
    li.textContent = shoppingItem;
    // let arrItem = document.createTextNode(shoppingItem);
    // li.appendChild(arrItem);
    list.appendChild(li);
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
  //Write your code in here

  books[0].src =
    "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg";
  books[1].src =
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328321953l/10814191.jpg";
  books[2].src =
    "https://images-na.ssl-images-amazon.com/images/I/418M2053aNL.jpg";

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

    if (book.alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
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
