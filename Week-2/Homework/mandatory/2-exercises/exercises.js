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
    //traverses through the arrayOfPeople
    let newH1 = document.createElement("h1"); //creates a new h1 element
    newH1.textContent = arrayOfPeople[i].name; //adds a name from the array to each h1 element
    content.appendChild(newH1); //appends the h1 elements and it's text to the div with id content
    let newH2 = document.createElement("h2"); // creates a new h2 element
    newH2.textContent = arrayOfPeople[i].job; //adds a corresponding job from the array to each h2 element
    content.appendChild(newH2); //appends the h2 elements and it's text to the div with id content
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
  let content = document.querySelector("#content");
  let ulListEl = document.createElement("ul"); //creates the unordered list element
  content.appendChild(ulListEl); //appends the ul created to the div with id content

  for (let i = 0; i < shopping.length; i++) {
    let listEl = document.createElement("li"); //creates list element as long as there is an item in the shopping list
    listEl.textContent = shopping[i]; //adds the items on the shopping list to each li element
    ulListEl.appendChild(listEl); //appends the li element with it's text to the ul element created earlier
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

let images = [
  {
    title: "The Design of Everyday Things",
    src:
      "https://assets.wired.com/photos/w_1001/wp-content/uploads/2015/09/design-of-everyday-things.jpg",
  },
  {
    title: "The Most Human Human",
    src:
      "https://www.kurzweilai.net/images/The-Most-Human-Human-Paperback-Front-Cover.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    src:
      "https://www.nytbooks.com/audiobooks/computers-technology/img/B0833FBNHV-300.jpg",
  },
];
function exerciseThree(books) {
  let ulEl = document.createElement("ul");
  document.body.appendChild(ulEl);
 
  let imageSrc = null;

  for (let i = 0; i < books.length; i++) {
    let liEl = document.createElement("li");
    let pEl = document.createElement("p");
    pEl.textContent = `${books[i].title} - ${books[i].author}`;
    let imgEl = document.createElement("img");

    if (images[i].title === books[i].title) {
      imageSrc = images[i].src;
    }

    imgEl.src = imageSrc;
    liEl.appendChild(pEl);
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);

    if (books[i].alreadyRead) {
      liEl.style.backgroundColor = "green";
    } else {
      liEl.style.backgroundColor = "red";
    }
    liEl.style.listStyle = "none";
    liEl.style.paddingRight = "150px";
    liEl.style.margin = "20px";
    imgEl.style.width = "300px";
  }
  ulEl.style.display = "flex";
  ulEl.style.justifyContent = "spread-between";
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
