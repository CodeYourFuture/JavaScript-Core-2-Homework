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
  arrayOfPeople.forEach(element => {
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    h1.innerHTML = element.name;
    h2.innerHTML = element.job;
    content.appendChild(h1);
    content.appendChild(h2);
    
  });
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
  var divEl = document.createElement("div");
  divEl.className = "content";
  var ulEl = document.createElement("ul")
  divEl.appendChild(ulEl)
  for(let i=0; i<shopping.length;i++){
    let liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    liEl.innerHTML = shopping[i];
  }
  document.body.appendChild(divEl)
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
  var ulE = document.createElement("ul"); 
  document.body.appendChild(ulE);
for(let i = 0; i< books.length; i++){
  var imgEl = document.createElement("img")
  var liEl = document.createElement("li")
  ulE.appendChild(liEl);
  var pEl = document.createElement("p");
  liEl.appendChild(pEl);
  pEl.innerHTML = `${books[i].title} - ${books[i].author}`
  liEl.appendChild(imgEl);
  liEl.style.listStyleType = "none"
  if(books[i].alreadyRead){
  liEl.style.backgroundColor = "green"
  }else
  liEl.style.backgroundColor = "red";
imgEl.src = `img/${i.toString()}.jpg`
}
ulE.style.display = "flex";
ulE.style.justifyContent = "space-evenly"
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
