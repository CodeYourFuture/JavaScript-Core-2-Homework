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
    let person = arrayOfPeople[i];
    let h1 = document.createElement("h1");
    h1.innerHTML = person.name + "!!";
    content.appendChild(h1);
    let h2 = document.createElement("h2");
    h2.innerHTML = person.job;
    content.appendChild(h2);
  }
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  let content = document.querySelector("#content");
  let shoppingList = document.createElement("ul");
  for (let i = 0; i < shopping.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = shopping[i];
    shoppingList.appendChild(listItem);
  }
  content.appendChild(shoppingList);
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
let bookStand = [{
    title: "The Design of Everyday Things",
    link: "https://assets.wired.com/photos/w_1001/wp-content/uploads/2015/09/design-of-everyday-things.jpg",
  },
  {
    title: "The Most Human Human",
    link: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    link: "https://www.nytbooks.com/audiobooks/computers-technology/img/B0833FBNHV-300.jpg",
  },
];

function exerciseThree(books) {
  //Write your code in here
  let content = document.querySelector("#content");
  let bookLists = document.createElement("ul");
  let bookImageSource = "";
  for (i = 0; i < books.length; i++) {
    let book = books[i];
    let bookDetails = document.createElement("li");
    let bookItem = document.createElement("p");
    bookItem.innerHTML = book.title + "- " + book.author;
    let bookImage = document.createElement("img");
    if (book.title === bookStand[i].title) {
      bookImageSource = bookStand[i].link;
    }
    bookImage.src = bookImageSource;

    // bookImage.src = "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg"
    bookDetails.appendChild(bookItem);
    bookDetails.appendChild(bookImage);
    bookLists.appendChild(bookDetails);

    if (books[i].alreadyRead === true) {
      bookDetails.style.backgroundColor = "green";
    } else {
      bookDetails.style.backgroundColor = "red";

    }
  }

content.appendChild(bookLists);
}


// DO NOT EDIT BELOW HERE

let people = [{
    name: "Chris",
    job: "Teacher",
  },
  {
    name: "Joanna",
    job: "Student",
  },
  {
    name: "Boris",
    job: "Prime Minister",
  },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [{
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