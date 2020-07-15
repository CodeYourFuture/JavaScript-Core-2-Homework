/* Challenge 1: Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/

let writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

// https://reactgo.com/javascript-loop-through-array-of-objects/#:~:text=In%20es6%20we%20have%20a,over%20the%20array%20of%20objects.&text=forEach%20methods%20takes%20the%20callback,object%20present%20in%20the%20array.
// writers.forEach((writer) => console.log(writer.firstName, writer.lastName)); --> to test if this forEach method works

// METHOD1: forEach methods takes the callback function as an argument and runs on each object present in the array.
writers.forEach((writer) => console.log(`Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and work as a ${writer.occupation}.`));

// METHOD2: in this for of loop, on each iteration different object is assigned to the writer variable.
for(let writer of writers) {
  console.log(`Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and work as a ${writer.occupation}.`);
}

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/

// https://alligator.io/js/filter-array-method/
function aliveWriter(writer) {
  if (writer.alive === true) {
    return writer;
  }
}

let aliveWriters = writers.filter(aliveWriter);
// console.log(aliveWriters); ---> to check if the output is correct.

aliveWriters.forEach((writer) => console.log(`Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and work as a ${writer.occupation}.`));