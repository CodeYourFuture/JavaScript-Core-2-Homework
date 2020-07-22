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

function exerciseThree(books) {

  let unOrderedListNew = document.createElement("ul")
  let content = document.querySelector("#content");

  for (let i = 0; i < books.length; i ++){
    let listElement = document.createElement("li");
    let newPEl = document.createElement("p");
    let bookImage = document.createElement("img");

    newPEl.innerHTML = books[i].title + " " + books[i].author;
   
    content.appendChild(unOrderedListNew);
    unOrderedListNew.appendChild(listElement);
    listElement.appendChild(newPEl);

    bookImage.src = newPEl;
    listElement.appendChild(bookImage);

    if (books[i].alreadyRead ===  true){
      return books[i].style.backgroundColor = "green";
    } else {
      return books[i].style.backgroundColor = "red";
    }
  }


  //Write your code in here
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
