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

let books = {
    book1: {
        Title: "An Enemy Called Average",
        Author: "John Mason",
        alreadyRead: true,
        booksread:function readBook(read){
            if(this.alreadyRead) {
                return 'You already read "An Enemy Called Average" by John Mason'; 
            }else 
            return 'You still need to read "An Enemy Called Average" by John Mason';
        }
    },

    book2: {
        Title: "Understanding the power that controls your Future",
        Author: "Pastor Chris oyakhilome",
        alreadyRead: true,
        booksread:function readBook(read){
            if(this.alreadyRead) {
                return 'You already read "Understanding the power that controls your Future" by Pastor Chris oyakhilome'; 
            }else 
            return 'You still need to read "Understanding the power that controls your Future" by Pastor Chris oyakhilome';
        }
    },
    book3: {
        Title: "The Alchemist",
        Author: "Paulo Coelho",
        alreadyRead: true,
        booksread:function readBook(read){
            if(this.alreadyRead) {
                return 'You already read "The Alchemist" by Paulo Coelho'; 
            }else 
            return 'You still need to read "The Alchemist" by Paulo Coelho';
        }
    },
    book4: {
        Title: "Why you act the way you do",
        Author: "Tim Lahaye",
        alreadyRead: false,
        booksread:function readBook(read){
            if(this.alreadyRead ) {
                return 'You already read "Why you act the way you do" by Tim Lahaye'; 
            }else 
            return 'You still need to read "Why you act the way you do" by Tim Lahaye';
        
        }
    },
}
    
// function readBook(read){
//     if(read.alreadyRead = "Yes") {
//         return 
//     }
// }
console.log(books.book1.booksread());
console.log(books.book2.booksread());
console.log(books.book3.booksread());
console.log(books.book4.booksread());