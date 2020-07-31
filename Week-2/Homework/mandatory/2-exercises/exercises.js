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
  
  for( let i = 0; i < arrayOfPeople.length; i++) {

    //with this i am able to create h1 and h2 elements

    let h1Elements = document.createElement("h1");
    let h2Elements = document.createElement("h2");

    //with this i can add text to the array

    h1Elements.textContent = arrayOfPeople[i].name;
    h2Elements.textContent = arrayOfPeople[i].job;

    //with this i am adding it to the parent node

    content.appendChild(h1Elements);
    content.appendChild(h2Elements);
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

  // with this it selects the content div

  let content = document.querySelector("#content");

  //with this it creates a new unordered list element and adding it to the parent node

  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  shopping.map(item => {

    //with this it creates a new list with text and adding it to the parent node 

    let lists = document.createElement("li");
    lists.textContent = item;
    unorderedList.appendChild(li);
  });



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
  let content = document.querySelector("#content");
  let unorderedList = document.createElement("ul");
  let bookUrls= [
    "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg", 
    "https://images-na.ssl-images-amazon.com/images/I/418M2053aNL.jpg" 
  ];
  let bookHead = document.createElement("h2");
  content.appendChild(bookHead);
  bookHead.textContent = "Book List";
  content.appendChild(unorderedList);


  for( let i = 0; i < books.length; i++) {

    let para = document.createElement("p");
    let lists = document.createElement("li");
    let bookImages = document.createElement("img");

    para.textContent = `${books[i].title} - ${books[i].author}`
    bookImages.src = bookUrls[i];

    unorderedList.appendChild(lists);
    lists.appendChild(para);
    lists.appendChild(bookImages);

    unorderedList.style.listStyleType = "none";
    unorderedList.style.display = "flex";
    unorderedList.style.flexWrap = "wrap";
    lists.style.width = "400px";
    bookImages.style.width = "200px";

    if(books[i].alreadyRead === true) {
      lists.style.backgroundColor = "green";
    } else {
      lists.style.backgroundColor = "red";
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
