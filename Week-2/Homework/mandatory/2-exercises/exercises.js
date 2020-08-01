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

  arrayOfPeople.map(item=> {
    let h1 = document.createElement('H1');
    let h2 = document.createElement('H2');
    h1.textContent = item.name;
    h2.textContent = item.job;
    content.appendChild(h1);
    content.appendChild(h2);
  })


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
  let unorderedList = document.createElement('ul');
  content.appendChild(unorderedList);
 
  shopping.map(item => {
    
    let li = document.createElement('li');
    li.textContent = item;
    unorderedList.appendChild(li);
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
  //Write your code in here
  let content = document.querySelector("#content");
  let unorderedList = document.createElement('ul');
  let imageURL = 
  [
    'https://productdork.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png',
    'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/418M2053aNL.jpg'   
  ]
  let heading = document.createElement('h1');
  content.appendChild(heading);
  heading.textContent = 'Book List';
  
  books.map((item, index) => {
    //CREATE ELEMENTS
    let paragraph = document.createElement('p');
    let image = document.createElement('img');
    let listItem = document.createElement('li');
    
    //

    //STYLES
    
    listItem.style.margin = '20px';
    listItem.style.padding = '20px';
    listItem.style.width = '350px';
    unorderedList.style.display = 'flex';
    unorderedList.style.flexWrap = 'wrap';
    unorderedList.style.listStyleType = 'none';
    image.style.width = '200px';
    item.alreadyRead ? listItem.style.backgroundColor = 'green' :  listItem.style.backgroundColor = 'red';
    //


    paragraph.textContent = `${item.title} - ${item.author}`;
    image.src = imageURL[index];
    
    
    listItem.appendChild(paragraph);
    listItem.appendChild(image);
    unorderedList.appendChild(listItem);
    content.appendChild(unorderedList);
    


  })
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
