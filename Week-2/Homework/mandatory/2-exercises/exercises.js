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
  let content = document.querySelector('#content');

  arrayOfPeople.forEach((book) => {
    const h1 = document.createElement('h1');
    const h1text = document.createTextNode(book.name);
    const h2 = document.createElement('h2');
    const h2text = document.createTextNode(book.job);

    h1.appendChild(h1text);
    h2.appendChild(h2text);
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
  const ul = document.createElement('ul');
  content.appendChild(ul);

  shopping.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
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
  const h1 = document.createElement('h1');
  const ul = document.createElement('ul');
  h1.textContent = 'Books list';
  ul.style.listStyle = 'none';
  ul.style.display = 'flex';
  ul.style.flexWrap = 'wrap';

  content.appendChild(h1);
  content.appendChild(ul);

  books.forEach((book) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const id = Math.floor(Math.random() * 100);

    li.style.backgroundColor = book.alreadyRead ? 'green' : 'red';
    p.textContent = `${book.title} by ${book.author}`;
    img.src = `https://picsum.photos/id/${id}/200/300`;

    li.style.padding = '1em';
    li.style.maxWidth = '500px';
    li.style.minWidth = '400px';
    li.style.marginRight = '3rem';
    li.style.marginBottom = '3rem';
    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);
  });
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
  { name: 'Chris', job: 'Teacher' },
  { name: 'Joanna', job: 'Student' },
  { name: 'Boris', job: 'Prime Minister' },
];

exerciseOne(people);

let shopping = ['Milk', 'Break', 'Eggs', 'A Dinosaur', 'Cake', 'Sugar', 'Tea'];

exerciseTwo(shopping);

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

exerciseThree(books);
