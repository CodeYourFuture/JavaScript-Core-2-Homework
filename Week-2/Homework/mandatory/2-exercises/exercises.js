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
    let h1 = document.createElement("h1");
    content.appendChild(h1);
    let txtH1 = document.createTextNode(arrayOfPeople[i].name);
    h1.appendChild(txtH1);

    let h2 = document.createElement("h2");
    content.appendChild(h2);
    let txtH2 = document.createTextNode(arrayOfPeople[i].job);
    h2.appendChild(txtH2);
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
  let content = document.getElementById("content");
  let ul = document.createElement("ul");
  content.appendChild(ul);

  shopping.forEach(function (item) {
    let li = document.createElement("li");
    let list = document.createTextNode(item);
    li.appendChild(list);
    ul.appendChild(li);
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
  let content = document.getElementById("content");
  let div = document.createElement('div');
  
  content.appendChild(div);
  for (let i=0; i<books.length; i++) {
    let p = document.createElement('p');
    div.appendChild(p);
    let txt = books[i].title + " " + books[i].author;
    let bookInfo = document.createTextNode(txt);
    p.appendChild(bookInfo);
    let ul = document.createElement('ul');
    content.appendChild(ul);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.style.width = '300';
    li.style.height = '300';
    
    let img = document.createElement('img');
    if(i === 0) {
      img.setAttribute('src', 'https://mitpress.mit.edu/sites/default/files/9780262640374.jpg');
    }
    if (i === 1) {
      img.setAttribute('src', 'https://www.kurzweilai.net/images/The-Most-Human-Human-Paperback-Front-Cover.jpg');
    }
    if (i === 2) {
      img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg');
    }
    img.style.width = '150';
    li.appendChild(img);
    if (books[i].alreadyRead === true) {
      li.style.background = 'green';
    } else if (books[i].alreadyRead === false) {
      li.style.background = 'red';
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
