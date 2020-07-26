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

  for (let i = 0; i < arrayOfPeople.length; i++) {
    let h = document.createElement("H1");
    let t = document.createElement("H2");
    h.innerText = arrayOfPeople[i].name;
    t.innerText = arrayOfPeople[i].job;
    content.appendChild(h);
    content.appendChild(t);
  }
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  document.createElement("ul");
  for (let i = 0; i < shopping.length; i++) {
    let li = document.createElement("li");
    li.innerText = shopping[i];
    content.appendChild(li);
  }
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
let bookpics = [
  "https://mitpress.mit.edu/sites/default/files/9780262640374.jpg",
  "https://images.gr-assets.com/books/1295465264l/8884400.jpg",
  "https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg",
];

function exerciseThree(books) {

  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);
  for (let i = 0; i < bookpics.length; i++) {
    let p = document.createElement("p");
    let list = document.createElement("li");
    let images = document.createElement("img");
    p.innerText = books[i].title + " " + books[i].author;
    images.src = bookpics[i];
    unorderedList.appendChild(list);
    list.appendChild(p);
    list.appendChild(images);

    if (books[i].alreadyRead === true) {
      list.style.backgroundColor = "green";
    } else {
      list.style.backgroundColor = "red";
    }
  }
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
