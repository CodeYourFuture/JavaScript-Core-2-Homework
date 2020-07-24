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

let books = [
    {
    title: 'The Chimp Paradox',
    author: 'Steve Peters',
    alreadyRead: true
    },
    {
    title: 'The China study',
    author: 'T. Colin Campbell',
    alreadyRead: true
    },
    {
    title: "A Connecticut Yankee in King Arthur's Court",
    author: 'Mark Twain',
    alreadyRead: false
    },
    {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    alreadyRead: false
    },
];

books.map(item => item.alreadyRead ? console.log(`You already read '${item.title}' by ${item.author}`) : console.log(`You still need to read '${item.title}' by ${item.author}`));
