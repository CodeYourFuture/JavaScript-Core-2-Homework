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
  for(let i =0; i < arrayOfPeople.length; i++){
    let h1El = document.createElement("h1");
    let h2El = document.createElement("h2");
    content.appendChild(h1El);
    content.appendChild(h2El);
    h1El.innerHTML = `${arrayOfPeople[i].name}`;
    h2El.innerHTML = `${arrayOfPeople[i].job}`;
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
  //Write your code in here
  let ulEl = document.createElement("ul");
  content.appendChild(ulEl);
  for(let i =0; i < shopping.length; i++){
    let liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    liEl.textContent = shopping[i]; 
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
  //Write your code in here
  for(let i=0; i<books.length; i++){
    let bookPEl = document.createElement("p");
    document.body.appendChild(bookPEl);
    let bookUlEl = document.createElement("ul");
    bookPEl.appendChild(bookUlEl);
    let bookLiEl = document.createElement("li");
    bookUlEl.appendChild(bookLiEl);
    bookLiEl.textContent = `"${books[i].title}" by "${books[i].author}"`;
    let bookAEl = document.createElement("a");
    bookPEl.appendChild(bookAEl);
    let bookImgEl = document.createElement("img");
    bookAEl.appendChild(bookImgEl);
    if(i === 0) {
      bookImgEl.src = "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg";
      bookAEl.href = "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg";

    } else if(i===1){
      bookImgEl.src = "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg";
      bookAEl.href = "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg";
    } else {
      bookImgEl.src = "https://images-na.ssl-images-amazon.com/images/I/418M2053aNL._SX396_BO1,204,203,200_.jpg";
      bookAEl.href = "https://images-na.ssl-images-amazon.com/images/I/418M2053aNL._SX396_BO1,204,203,200_.jpg";
    }
    if(books[i].alreadyRead === true) {
      bookPEl.style.backgroundColor = "green";
    } else {
      bookPEl.style.backgroundColor = "red";
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
