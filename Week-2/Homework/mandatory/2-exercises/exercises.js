/**
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
 * @format
 */

function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (let i = 0; i < arrayOfPeople.length; i++) {
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    h1.textContent = arrayOfPeople[i].name;
    h2.textContent = arrayOfPeople[i].job;
    content.appendChild(h1);
    content.appendChild(h2);
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
  let ul = document.createElement("ul");
  for (let i = 0; i < shopping.length; i++) {
    let li = document.createElement("li");
    li.textContent = shopping[i];
    ul.appendChild(li);
  }
  content.appendChild(ul);
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
  let ul = document.createElement("ul");
  let images = [
    "https://i.chzbgr.com/thumb800/1633029/h3E5780ED/and-come-indoors-and-another-cat-climbing-the-toy-paper-roll-and-captioned-that-you-are-home-early",
    "https://filmdaily.co/wp-content/uploads/2020/05/cat-memes-lede-1300x890.jpg",
    "https://filmdaily.co/wp-content/uploads/2020/04/CatMemeQuarantine-lede.jpg",
  ];
  for (let i = 0; i < books.length; i++) {
    let p = document.createElement("p");
    let li = document.createElement("li");
    let img = document.createElement("img");
    let title = books[i].title;
    let author = books[i].author;
    let alreadyRead = books[i].alreadyRead;
    p.textContent = `${title}, ${author}, ${alreadyRead}`;
    img.src = images[i];
    img.style.width = "300px";
    if (alreadyRead === true) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);
  }

  content.appendChild(ul);
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
