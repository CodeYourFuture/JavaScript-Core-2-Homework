/* 
The Reading List
Keep track of which books you read and which books you want to read!

===== */

/* Exercise 1
=====
Create an array of objects, where each object describes a book and has properties for:

- The title (a string)
- Author (a string)
- and alreadyRead (a boolean indicating if you read it yet)

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"
 */

let book1={
    title:"Flat Stanley",
    author: "J.Greenhut",
    alreadyRead: true,
}
let book2= {
    title:"Astrosaurs",
    author: "Steve Cole",
    alreadyRead: true,
}
let book3= {
    title:"Horrid Henny and the Demon Dinner Lady",
    author: "Francesca Simon",
    alreadyRead: false,
}

let myBooks=[book1, book2, book3]

/* ====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you read it yet or not. 

If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
 */
function checkRead (book){
    if (book.alreadyRead === true;){
        return 
    }
    
}

