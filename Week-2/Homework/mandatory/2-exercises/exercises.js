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
  for(let i=0; i<arrayOfPeople.length;i++)
  {
    let heading1=document.createElement("h1");
    heading1.textContent+= arrayOfPeople[i].name;
    content.appendChild(heading1);
    let heading2=document.createElement("h2");
    heading2.textContent+= arrayOfPeople[i].job;
    content.appendChild(heading2);
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
  console.log("enteered function")

  var ul=document.createElement("ul");
  ul.className="list";

  content.appendChild(ul);

  for(let i=0;i<shopping.length;i++)
  {
    var li=document.createElement("li");
    li.textContent+=shopping[i];
    console.log("before append")
    ul.appendChild(li);
    
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

  let content = document.querySelector("#content");
  let ul=document.createElement("ul");
  ul.className="ulList";
  content.appendChild(ul);
  // created an array of links for images source.
  var imageSource=["https://m.media-amazon.com/images/I/416Hql52NCL.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL.jpg" ]

  
  for(let i=0;i<books.length;i++)
  {
    var p=document.createElement("p");
    var li=document.createElement("li");
    li.className="liItem";

    p.textContent+=books[i].title +"-" + books[i].author;
    li.appendChild(p);
    

    let img=document.createElement("img");
    img.className="imgDimension";

    img.src=imageSource[i];
    img.alt= books[i].title +"-" + books[i].author;

    li.appendChild(img);

    if(books[i].alreadyRead)
    li.style.backgroundColor="green";
    else 
    li.style.backgroundColor="red";
    
    ul.appendChild(li);

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
