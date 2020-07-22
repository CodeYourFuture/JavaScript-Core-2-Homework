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
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        alreadyRead: true,
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        alreadyRead: false,
    },
    {
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel García Márquez',
        alreadyRead: true,
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R',
        alreadyRead: true,
    },
    {
        title: 'Invisible Man',
        author: 'Ralph Ellison',
        alreadyRead: false,
    },
    {
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        alreadyRead: false,
    },
    {
        title: 'Beloved',
        author: 'Toni Morrison',
        alreadyRead: true,
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R',
        alreadyRead: false,
    },
];
// for(let value in books){
//     console.log(`${books[value].title} by ${books[value].author}.`);
// }
for(let key in books){
    if(books[key].alreadyRead === true){
        console.log(`You already read ${books[key].title} by ${books[key].author}.`)
    }else{
        console.log(`You still need to read ${books[key].title} by ${books[key].author}.`)
    }
}
