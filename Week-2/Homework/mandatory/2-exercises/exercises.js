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
  let nameOfPerson, jobOfPerson;

  arrayOfPeople.forEach(person => {
    nameOfPerson = document.createElement("h1");
    nameOfPerson.innerText = person.name;
    content.appendChild(nameOfPerson);

    jobOfPerson = document.createElement("h2");
    jobOfPerson.innerHTML = person.job;
    content.appendChild(jobOfPerson);
  })
} 
//exerciseOne();
/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

 
function exerciseTwo(shopping) {
  let content = document.querySelector("#content");
  let unOrderedList = document.createElement("ul")
  content.appendChild(unOrderedList);

  shopping.forEach(item => {
    let li1 = document.createElement("li");
    li1.innerText = item;
    unOrderedList.appendChild(li1);
  })
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
    title:"The Design of Everyday Things", 
    src:"images/the-design-of-everyday-things.jpeg" 
  },
   {
    title:"The Most Human Human", 
    src:"images/the-most-human-human.jpeg" 
  },
   {
    title:"The Pragmatic Programmer", 
    src:"images/the-pragmatic-programmer.jpeg" 
  }
]

function exerciseThree(books) {
    
    let content = document.querySelector("#content");
    console.log (content);

    let bookList = document.createElement("ul");
    content.appendChild(bookList);
    
    books.forEach((book) => {
        let imageSrc;
        let listItem = document.createElement("li");
        bookList.appendChild(listItem);
        let bookHeader = document.createElement("p");
        bookHeader.textContent = `${book.title} - ${book.author}`;
        listItem.appendChild(bookHeader);
        let imageItem = document.createElement("img");

        images.find((image) => {
            if (image.title === book.title){
            imageSrc = image.src;
          }
        })

        imageItem.src = imageSrc;
        listItem.style.margin = "15px";
        listItem.appendChild(imageItem);

        if (book.alreadyRead){
          listItem.style.backgroundColor = "green";
        } else {
          listItem.style.backgroundColor = "yellow";
        }
    });

    bookList.style.listStyle = "none";
    bookList.style.display = "flex";

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////
/* This is another way of solution.

function exerciseThree(books) {

  let bookList = document.createElement("ul");

  books.forEach(book => {
    let imageSrc;

    imageArr.forEach(image => {
      if (book.title === image.title){
        imageSrc = image.src;
      }
    });

    let ListItem = document.createElement("li");
    let bookHeader = document.createElement("p");

    bookHeader.textContent = `${book.title} - ${book.author}`;

    let image = document.createElement("img");
    image.src = imageSrc;

    if (book.alreadyRead === true){
      listItem.style.backgroundColor = "green";
    } else{
      listItem.style.backgroundColor = "red";
    }

    listItem.append(bookHeader);
    listItem.append(image);
    bookList.appendChild(listItem);
    let content = document.querySelector("#content");

  });

  //let content = document.querySelector("#content");
  //document.body.appendChild(bookList);
  //content.appendChild(bookList);
}

// let listItem = document.createElement("li");
// listItem.className = "bookItem";

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////
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
