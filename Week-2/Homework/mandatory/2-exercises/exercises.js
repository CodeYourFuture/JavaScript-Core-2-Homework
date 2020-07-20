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

  for(let i=0; i < arrayOfPeople.length; i++){
    //create h1 element
    let h1Els =  document.createElement('h1');
    let h2Els =  document.createElement('h2');

    //add text with name from arrayOfPeople
    h1Els.textContent = arrayOfPeople[i].name;
    h2Els.textContent = arrayOfPeople[i].job;

    //add to parent node
    content.appendChild(h1Els);
    content.appendChild(h2Els);

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
  
  let shopList = document.querySelector('#shoppingList');
  let shoppingTitle = document.createElement('h3');

  shoppingTitle.textContent = "Shopping List";
  shopList.appendChild(shoppingTitle);

  for(let i=0; i< shopping.length; i++){
    let unorderedList = document.createElement('ul');
    let list = document.createElement('li');

     list.textContent = shopping[i];

     shopList.appendChild(unorderedList);
     unorderedList.appendChild(list);
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

  let bookDiv = document.querySelector('#bookList');
  let bookpics = ["./bookImages/dan.jpeg", "./bookImages/human.jpeg", "./bookImages/pragmatic.jpeg"]
  //create p elements
  let bookTitle = document.createElement('h3');
  bookDiv.appendChild(bookTitle);
  
  bookTitle.textContent = "Book List";

  for(let i=0; i< books.length; i++){
    let bookParagraph = document.createElement('p');
    let unorderedBookList = document.createElement('ul');
    let innerlist = document.createElement('li');
    let bookImages = document.createElement('img');

  //add title and author of books
  bookParagraph.textContent = books[i].title + " - " + books[i].author;

  //used bookpic array to display images
  bookImages.src = bookpics[i];

  //attach to parent nodes
  bookDiv.appendChild(unorderedBookList);
  unorderedBookList.appendChild(innerlist);
  innerlist.appendChild(bookParagraph);
  innerlist.appendChild(bookImages);
  unorderedBookList.style.width = "400px";

  if(books[i].alreadyRead === true){
    innerlist.style.backgroundColor = "green";
  }else {
    innerlist.style.backgroundColor = "red";
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
