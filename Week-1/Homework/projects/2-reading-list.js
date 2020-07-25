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

//Exercise 1 -> the question asks to loop through the array. My solution only targets index 0. How would I loop should the array have more than 1 object?

let books = [
    {title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: false
    }
];
let exercise1 - books.map(x => `${x.title} by ${x.author}`).toString();
let bookAndAuthor = `"${books[0].title}" by ${books[0].author}`;

console.log(bookAndAuthor);

//Exercise 2 -> I tried to create a function to insert into the forEach function but not sure how to continue with it. Or if there's a better way to formulate my function?

function hasAlreadyRead() {
    if (books.alreadyRead === true) {
        return `You already read ${bookAndAuthor}`;
    } else {
        return `You still need to read "The Lord of the Rings" by J.R.R. Tolkien.`;
    }
}

books.forEach(hasAlreadyRead());


let exercise2 = books.map(x => x.alreadyRead === true ? `You already read ${x.title} by ${x.author}` :  `You still need to read $${x.title} by ${x.author}`).toString();














