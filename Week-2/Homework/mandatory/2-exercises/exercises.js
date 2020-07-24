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

  for(let i = 0; i < arrayOfPeople.length; ++i) {
    let personDiv = document.createElement("div");
    content.appendChild(personDiv);

    let nameEl = document.createElement("h1");
    nameEl.innerHTML = arrayOfPeople[i].name;
    personDiv.appendChild(nameEl);

    let jobEl = document.createElement("h2");
    jobEl.innerHTML = arrayOfPeople[i].job;
    personDiv.appendChild(jobEl);
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
  let content = document.querySelector("#content");

  let titleEl = document.createElement("h3");
  titleEl.innerHTML = "<u>shopping list:</u>";
  content.appendChild(titleEl);

  let listEl = document.createElement("ul");
  content.appendChild(listEl);

  for(let i = 0; i < shopping.length; ++i) {
    let itemEl = document.createElement("li");
    itemEl.innerHTML = shopping[i];
    listEl.appendChild(itemEl);
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


function exerciseThree(books) {
  let content = document.querySelector("#content");

  let titleEl = document.createElement("h3");
  titleEl.innerHTML = "<u>List of favorite books:</u>";
  content.appendChild(titleEl);

  let booksDiv = document.createElement("div");
  booksDiv.style.display = "flex";
  content.appendChild(booksDiv);

  for(let i = 0; i < books.length; ++i) {
    let bookEl = document.createElement("div");
    bookEl.style.padding = "20px";
    bookEl.style.margin = "0 20px 0 20px";
    booksDiv.appendChild(bookEl);

    if(books[i].alreadyRead) {
      bookEl.style.backgroundColor = "green";
    }
    else {
      bookEl.style.backgroundColor = "red";
    }

    let bookTitleEl = document.createElement("p");
    bookTitleEl.innerHTML = books[i].title + " - " + books[i].author;
    bookEl.appendChild(bookTitleEl);

    let bookImageEl = document.createElement("img");
    // It would be less messy if I could modify the object array or if the images were already provided
    if(books[i].title === "The Design of Everyday Things") {
      bookImageEl.src = "https://assets.wired.com/photos/w_1001/wp-content/uploads/2015/09/design-of-everyday-things.jpg";
    }
    if(books[i].title === "The Most Human Human") {
      bookImageEl.src = "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg";
    }
    if(books[i].title === "The Pragmatic Programmer") {
      bookImageEl.src = "https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg";
    }
    bookImageEl.height = 256;
    bookEl.appendChild(bookImageEl);
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
