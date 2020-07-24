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
  let content = this.document.querySelector('#content');
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
  let newDiv = document.createElement("div");

  newDiv.className = "content";
  let newUnOrderedList = document.createElement("ul")
  newDiv.appendChild(newUnOrderedList)
  for(let i=0; i<shopping.length;i++){
    let newListElement = document.createElement("li");
    newUnOrderedList.appendChild(newListElement);
    newListElement.innerHTML = shopping[i];
  }
  document.body.appendChild(newDiv)
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
let imageSrc = [
  {
    title:"The Design of Everyday Things", 
    src:"./extras.images/the design.jpg" 
  },
   {
    title:"The Most Human Human", 
    src:"./extras.images/the human.jpg" 
  },
   {
    title:"The Pragmatic Programmer", 
    src:"./extras.images/the pragmatic.jpg" 
  }
]

// function exerciseThree(books) {
 
//   let bookList = document.createElement("ul");
  
//   books.forEach(book => {
//     let imageSrc = null;
//     imageSrc.forEach(image => {
//       if (book.title === image.title){
//         imageSrc = image.src;
//       }
//     });
//     let ListItem = document.createElement("li");
//     let bookHeader = document.createElement("p");
//     bookHeader.textContent = `${book.title} - ${book.author}`;
//     let image = document.createElement("img");
//     image.src = imageSrc;
    
//     if (book.alreadyRead === true){
//       listItem.style.backgroundColor = "green";
//     } else{
//       listItem.style.backgroundColor = "red";
//     }
//     listItem.append(bookHeader);
//     listItem.append(image);
//     bookList.appendChild(listItem);
//   });
//   let content = document.querySelector("#content");
//   content.appendChild(bookList);
// }

function exerciseThree(books) {
  //Write your code in here
  let unOrderedList = document.createElement("ul"); 

  document.body.appendChild(unOrderedList);

for(let i = 0; i< books.length; i++){

  let imgElement = document.createElement("img");

  let elementOfList = document.createElement("li");

  unOrderedList.appendChild(elementOfList);

  let p = document.createElement("p");

  elementOfList.appendChild(p);

  p.innerHTML = `${books[i].title} - ${books[i].author}`

  elementOfList.appendChild(imgElement);

  elementOfList.style.listStyleType = "none"

  if(books[i].alreadyRead){
  elementOfList.style.backgroundColor = "green"
  }else
  elementOfList.style.backgroundColor = "red";
   
  imgElement.src = `img/${i.toString()}.jpg`
}
unOrderedList.style.display = "flex";
unOrderedList.style.justifyContent = "space-around"
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
