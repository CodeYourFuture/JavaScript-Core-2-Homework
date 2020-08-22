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

If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like ' "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [{"The title": "The Hobbit", Author: "J.R.R. Tolkien", alreadyRead: true},
{"The title": "The Hunger Games", Author: "Suzanne Collins", alreadyRead: false},
{"The title": "The Doomed City", Author: "Arkady and Boris Strugatskytr", alreadyRead: true}
];
for(let book in books){
    console.log(`${books[book]["The title"]} by ${books[book].Author}`);
    console.log(books[book].alreadyRead ? `You already read "${books[book]["The title"]}" by ${books[book].Author}` : `You still need to read "${books[book]["The title"]}" by ${books[book].Author}`);
}