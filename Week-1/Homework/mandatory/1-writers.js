require("./tests"); // This line is to help with running tests, please ignore this and move on to the challenge below

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
  },
];

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
Make sure to write the code for this underneath the code for the first task
*/

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 1-writers.js` into your terminal or run in VS code (F5)
*/

const { test, logged } = require("./tests");

const expectedLogs = [
  "Hi, my name is Virginia Woolf. I am 59 years old, and work as a writer.",
  "Hi, my name is Zadie Smith. I am 41 years old, and work as a writer.",
  "Hi, my name is Jane Austen. I am 41 years old, and work as a writer.",
  "Hi, my name is bell hooks. I am 64 years old, and work as a writer.",
];

const expectedLogsTaskTwo = [
  "Hi, my name is Zadie Smith. I am 41 years old, and work as a writer.",
  "Hi, my name is bell hooks. I am 64 years old, and work as a writer.",
];

for (let i = 0; i < expectedLogs.length; i++) {
  test(
    `Logged sentence ${i + 1} correctly`,
    expectedLogs[i] === logged[i],
    expectedLogs[i],
    logged[i]
  );
}

for (let i = 0; i < expectedLogsTaskTwo.length; i++) {
  test(
    `Logged sentence ${i + 1} correctly for alive authors`,
    expectedLogsTaskTwo[i] === logged[i + expectedLogs.length],
    expectedLogsTaskTwo[i],
    logged[i + expectedLogs.length]
  );
}
