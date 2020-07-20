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

  for (let person of arrayOfPeople){
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    content.append(h1);
    content.append(h2);
    h1.innerHTML = person.name;
    h2.innerHTML = person.job;
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
  let ul = document.createElement("ul");
  content.append(ul);

  for(let item of shopping){
    let li = document.createElement("li");
    content.append(li);
    li.innerHTML = item;
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
  let script = document.querySelector("script");
  let content = script.previousElementSibling;
  let h1 = document.createElement("h1");
  content.append(h1);
  h1.innerHTML = "Book List"
  let ul = document.createElement("ul");
  ul.style.listStyle = "none";
  ul.style.display = "flex";
  ul.style.flexWrap = "wrap";
  ul.style.padding = "20px";
  //ul.style.width = "calc( 100% - 41px)";
  content.append(ul);
  let images = [ 
      './images/The-Design-Of-Everyday-Things.jpg',
      './images/The-Most-Human-Human.jpg',
      './images/The-Pragmatic-Programmer.jpg'
   ];
   let bookIndex = 0;

  for(let book of books){
    let li = document.createElement("li");
    li.style.margin = "10px";
    li.style.padding = "10px";
    li.style.minWidth = "250px";
    li.style.fontSize = "10px";
    ul.append(li);
    li.style.backgroundColor = book.alreadyRead ? 'green' : 'red';
    let p = document.createElement("p");
    li.append(p);
    p.innerHTML = `${book.title} - ${book.author}`;
    
    let image = document.createElement("img");
    image.src = images[ bookIndex++ ];
    image.style.width = "50%";
    li.append(image);
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
