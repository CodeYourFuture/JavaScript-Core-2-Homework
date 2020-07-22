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

/* for (let key in writers){

  //console.log(writers[key]);

  console.log(` Hi, my name is ${writers[key].firstName} ${writers[key].lastName}. I am ${writers[key].age} years old, and works as a  ${writers[key].occupation}.`);
} */
///////////////////////////////////////////////////////////
//Writing with forEach() array method;
let writeNames = writers.forEach(writer => {
  console.log (` Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and works as a  ${writer.occupation}.`)
})
/////////////////////////////////////////////////////////////
/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/

for (let key in writers){

  if(writers[key].alive === true){
    console.log(` Hi, my name is ${writers[key].firstName} ${writers[key].lastName}. I am ${writers[key].age} years old, and works as a ${writers[key].occupation}.`);
  } 
  else{
    console.log(`${writers[key].firstName} ${writers[key].lastName} is death.`)
  }
}