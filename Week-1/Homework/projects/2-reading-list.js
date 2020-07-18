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
function book(title, author, alreadyRead) {
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead
}

let books = [new book("A Tale of Two Cities", "Charles Dickens", false), 
             new book("The Little Prince", "Antoine de Saint-Exupéry", false), 
             new book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", true),
             new book("The Hobbit", "J. R. R. Tolkien", false),
             new book("And Then There Were None", "Agatha Christie", false)
            ];

for (let i = 0; i < books.length; ++i) {
    if (books[i].alreadyRead) {
        console.log(`You already read "${books[i].title}" by ${books[i].author}.`);
    }
    else {
        console.log(`You still need to read "${books[i].title}" by ${books[i].author}.`);
    }
}