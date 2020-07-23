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
    content[i] = content[i].createElement('h1');
    content[i] = content[i].createElement('h2');
  }
}

// SA's version
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  for(let i=0; i < arrayOfPeople.length; i++){
    //create h1 element
    let h1Els =  document.createElement('h1');
    let h2Els =  document.createElement('h2');
    //add text with name from arrayOfPeople
    h1Els.textContent = arrayOfPeople[i].name;
    h2Els.textContent = arrayOfPeople[i].job;
    //add to parent node
    content.appendChild(h1Els);
    content.appendChild(h2Els);
  }

//homework club - Martin Armstrong
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach(person => {
    h1 = document.createElement('h1');
    h2 = document.createElement('h2');

    h1.textContent = person.name;
    h2.textContent = person.job;

    content.append.Child(h1);
    content.append.Child(h2);
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
  // create a div element and assign it to a variable "shoppingList"
  //let shoppingList = document.createElement('div');

  // give the div an ID 'content'
  //shoppingList.setAttribute('id', 'content');

  let contentDiv = document.getElementById('content');
  // create Element of unordered list inside div
  let list = document.createElement('ul');
  contentDiv.appendChild(list);

  shopping.forEach(shoppingItem => {
    let li = document.createElement('li');
    li.textContent = shoppingItem; // alt version to lines 76-77
    //let arrItem = document.createTextNode(shoppingItem);
    //li.appendChild(arrItem);
    list.appendChild(li);
  } )
}

  // FOR LOOP - create Element of list items inside ul, times the array length
  /*for (let i = 0; i < shopping.length; i++) {
    let li = document.createElement('li');
    let arrItem = document.createTextNode(shopping[i]);
    li.appendChild(arrItem);
    document.getElementsByTagName('ul').appendChild(li);
  }
  return shoppingList;
}*/


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
  books[0].src = "https://www.google.com/aclk?sa=l&ai=DChcSEwispaDaveHqAhVxgFAGHTSdAEUYABAFGgJkZw&sig=AOD64_1azV9IPe6WEzVXOxoeLptI5aprfQ&adurl&ctype=5&ved=2ahUKEwj80JbaveHqAhWhgXMKHfWCDy4Qvhd6BAgBEDM";
books[1].src = "https://www.google.com/aclk?sa=L&ai=DChcSEwjUjY3HvuHqAhUG-FEKHXVLDpwYABAHGgJ3cw&sig=AOD64_24Xuw_dw8fpfKPysyJKm5IlNdttQ&adurl&ctype=5&ved=2ahUKEwjzr4PHvuHqAhUClRoKHY3KD38Qvhd6BAgBEEA";
books[2].src = "https://www.google.com/aclk?sa=L&ai=DChcSEwjUjY3HvuHqAhUG-FEKHXVLDpwYABAHGgJ3cw&sig=AOD64_24Xuw_dw8fpfKPysyJKm5IlNdttQ&adurl&ctype=5&ved=2ahUKEwjzr4PHvuHqAhUClRoKHY3KD38Qvhd6BAgBEEA"
let contentDiv = document.getElementById('content');
let ul = document.createElement('ul');
contentDiv.appendChild(ul);
books.forEach(book => {
      //  create a <p> element 
     //Assign textContent with the book title and author 
     // append it to the page.
     let li = document.createElement('li');
     let p = document.createElement('p');
     let img = document.createElement('img');
     p.textContent = book.title + " - " + book.author;
     li.appendChild(p);
     li.appendChild(img);
     ul.appendChild(li);

     if(alreadyRead === true) {
       backgroundColor = 'green';
     } else {
      backgroundColor = 'red';
     }
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
