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
    {   title:"Atomic Habits",
        author:"James CLean",
        alreadyRead: true},
    {
        title: "12 Rules of Life",
        author: "Jordan B Peterson",
        alreadyRead: false},
    {
        title: "Philosophy Who needs it",
        author: "Ayn Rand",
        alreadyRead: true
    }];
for (let i = 0; i<books.length;i++){
    if(books[i].alreadyRead===true){
        console.log(`You already read ${books[i].title} by ${books[i].author}`)
}else{
        console.log(`You still need to read ${books[i].title} by ${books[i].author}`)
}
}
