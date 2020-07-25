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

	for (var i = 0; i < arrayOfPeople.length; i++) {
		let header1 = document.createElement('h1');
		let header2 = document.createElement('h2');
		header1.innerText = arrayOfPeople[i].name;
		header2.innerText = arrayOfPeople[i].job;
		content.appendChild(header1);
		content.appendChild(header2);
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
	let content = document.querySelector('#content');
	let unlist = document.createElement('ul');
	content.appendChild(unlist);

	shopping.forEach((item) => {
		let list = document.createElement('li');
		list.innerText = item;
		unlist.appendChild(list);
	});
}

/**
    I'd like to display my three favorite books inside a nice webpage!

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

	/*	books.forEach(book => {
		var currentBookPara = document.createElement('p');
		currentBookPara.innerText = book.title + '-' + book.author;

	});*/

	booksURL = [
		'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQy4q93p1VrxtPzUKqIbHbtpwGtWoNyYQlEow&usqp=CAU',
		'https://m.media-amazon.com/images/I/41m1rQjm5tL._SL350_.jpg',
		'https://images-na.ssl-images-amazon.com/images/I/418M2053aNL.jpg'
	];
	var bookHeader = document.createElement('h1');
	bookHeader.innerText = 'Book List';
	document.body.appendChild(bookHeader);
	var bookList = document.createElement('ul');
	books.forEach((book, index) => {
		var currentBookList = document.createElement('li');
		var currentBookPara = document.createElement('p');
		currentBookPara.innerText = book.title + ' - ' + book.author;
		currentBookList.appendChild(currentBookPara);
		var currentBookImg = document.createElement('img');
		currentBookImg.setAttribute('src', booksURL[index]);
		currentBookList.appendChild(currentBookImg);
		if (book.alreadyRead) {
			currentBookList.style.backgroundColor = 'green';
		} else {
			currentBookList.style.backgroundColor = 'red';
		}

		bookList.appendChild(currentBookList);
		bookList.style.display = 'flex';
		currentBookList.style.padding = '10px';
		currentBookList.style.margin = '20px';
		currentBookList.style.listStyle = 'none';
		document.body.appendChild(bookList);
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
	{ name: 'Boris', job: 'Prime Minister' }
];

exerciseOne(people);

let shopping = [
	'Milk',
	'Break',
	'Eggs',
	'A Dinosaur',
	'Cake',
	'Sugar',
	'Tea'
];

exerciseTwo(shopping);

const books = [
	{
		title       : 'The Design of Everyday Things',
		author      : 'Don Norman',
		alreadyRead : false
	},
	{
		title       : 'The Most Human Human',
		author      : 'Brian Christian',
		alreadyRead : true
	},
	{
		title       : 'The Pragmatic Programmer',
		author      : 'Andrew Hunt',
		alreadyRead : true
	}
];

exerciseThree(books);
