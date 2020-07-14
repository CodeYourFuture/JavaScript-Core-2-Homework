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
    title: "A Clash of Kings",
    author: "George R. R. Martin",
    alreadyRead: true,
    },
    {
        title: "Origin",
        author: "Dan Brown",
        alreadyRead: false,
    },
    {
        title: "The Goblet of Fire",
        author: "J. K. Rowling",
        alreadyRead: true,
    },
];

books.forEach(function (arrayItem) {
    console.log(`${arrayItem.title} by ${arrayItem.author}`);
});

books.forEach(function (arrayItem) {
    if (arrayItem.alreadyRead === true) {
        console.log(`You already read "${arrayItem.title}" by ${arrayItem.author}`);
    } else if (arrayItem.alreadyRead === false) {
        console.log(`You still need to read "${arrayItem.title}" by ${arrayItem.author}`);
    }
});
