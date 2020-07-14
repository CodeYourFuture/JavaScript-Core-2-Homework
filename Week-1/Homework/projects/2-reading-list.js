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
  (book1 = {
    title: "From My Sisters Lips",
    author: "Naima Robert",
    alreadyRead: true,
  }),
  (book2 = {
    title: "The Size of a Mustard Seed",
    author: "Umm Juwayriyah",
    alreadyRead: true,
  }),
  (book3 = {
    title: "Once Upon an Eid",
    author: "S.K. Ali",
    alreadyRead: false,
  }),
  (book4 = {
    title: "Isabella A Girl of Muslim Spain",
    author: "Yahiya Emerick",
    alreadyRead: false,
  }),
  (book5 = {
    title: "She Wore Red Trainers",
    author: "Naima Robert",
    alreadyRead: true,
  }),
];

let titleAuthor = books.map((book) => `${book.title} by ${book.author}`);
console.log(titleAuthor);

//function checkBookStatus(book) {
let readingList = books.map((book) => {
  if (book.already === true) {
    return `You already read ${book.title} by ${book.author}.`;
  }
  return `You still need to read ${book.title} by ${book.author}.`;
});
//}

console.log(checkBookStatus("From my Sisters Lips"));
