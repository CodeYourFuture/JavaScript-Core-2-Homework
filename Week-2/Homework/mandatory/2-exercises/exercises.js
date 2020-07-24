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
  for (var i = 0; i < arrayOfPeople.length; i++){
    var str = `<h1>${arrayOfPeople[i].name}</h1> <h2>${arrayOfPeople[i].job}</h2>`;

    content.innerHTML += str;
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
  for (var i = 0; i < shopping.length; i++){
    content.innerHTML += "<li>" + shopping[i] + "</li>";

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
var bookCovers = [
  '/Week-2/Homework/mandatory/2-exercises/images/Design-of-everything.png', 
  '/Week-2/Homework/mandatory/2-exercises/images/most-human-human.jpg',
  '\/Week-2/Homework/mandatory/2-exercises/images/the-pragmatic-programmer.jpg'
];


function exerciseThree(books) {
  var favoriteBooks = document.createElement('ul');
  for (var i = 0; i < books.length; i++) {

    var bookEl = document.createElement('li');
    var bookCover = document.createElement('img');
    if (books[i].title === "The Design of Everyday Things"){
      bookCover.src = bookCovers[0];
    } else if (books[i].title === "The Most Human Human"){
      bookCover.src = bookCovers[1];
    } else{
      bookCover.src = bookCovers[2];
    }

    bookEl.appendChild(bookCover);
    var bookDescription = document.createElement('p');
     bookDescription.textContent = `${books[i].title}   by   ${books[i].author}`;
    bookEl.appendChild(bookDescription);

      if (books[i].alreadyRead) {
        bookEl.style.backgroundColor = 'green';
    } else{
      bookEl.style.backgroundColor = 'red';
    } 
    favoriteBooks.appendChild(bookEl);
    document.body.appendChild(favoriteBooks);
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
