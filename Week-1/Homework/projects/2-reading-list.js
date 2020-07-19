/**

The Reading List
Keep track of which books you read and which books you want to read!

=====
Exercise 1
=====
Create an array of objects, where each object describes a book and has properties for:

- The title (a string)
- Author (a string)
- and alreadyRead (a boolean indicating if you read it yet)

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you read it yet or not. 

If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/
book1 = {
	title: 'Learn JavaScript ',
	Author: 'Tom willan',
	alreadyRead: true
};
book2 = {
	title: 'visit Japan',
	Author: 'Yokohama',
	alreadyRead: false
};
book3 = {
	title: 'Speak spanish in 10 days',
	Author: 'Maria Roja',
	alreadyRead: true
};
book4 = {
	title: 'How to become a Millionaire',
	Author: 'someone',
	alreadyRead: false
};

let books = [ book1, book2, book3, book4 ];
for (var i = 0; i < books.length; i++) {
	console.log(`${books[i].title} by ${books[i].Author}`);
}
console.log('---------------------------------------');

for (var i = 0; i < books.length; i++) {
	if (books[i].alreadyRead) console.log(`You already read "${books[i].title}" by ${books[i].Author}`);
	else console.log(`You still need to read "${books[i].title}" by ${books[i].Author}`);
}
