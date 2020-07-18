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

//excersise 1

let books = [
  {
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    alreadyRead: false,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    alreadyRead: true,
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    alreadyRead: true,
  },
  {
    title: "The Odyssey",
    author: "Homer",
    alreadyRead: false,
  },
  {
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    alreadyRead: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    alreadyRead: false,
  },
];

books.forEach((book) => console.log(`${book.title} by ${book.author}`));

//excersise 2

books.forEach((book) => {
  if (book.alreadyRead) {
    console.log(`You already read "${book.title}" by ${book.author}.`);
  } else {
    console.log(`You still need to read "${book.title}" by ${book.author}.`);
  }
});
