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
        title: 'Jurassic Park',
        Author: 'Elon Musk',
        alreadyRead : true
    },
    {
        title: 'Lord of the rings',
        Author: 'Donald trump',
        alreadyRead : false
    },
    {
        title: 'Peppa Pig',
        Author: 'DEl Piero',
        alreadyRead : true
    },
    {
        title: 'Little Princess',
        Author: 'Orhan Veli Kanik',
        alreadyRead : false
    }
];


let exercise1 = books.map(x=>`"${x.title} by ${x.Author}"`).toString();

let exercise2 = books.map(x=> x.alreadyRead === true ? `You already read ${x.title} by ${x.Author}` : ` You still need to read ${x.title} by ${x.Author}`).toString();

console.log(exercise1);

console.log(exercise2);
