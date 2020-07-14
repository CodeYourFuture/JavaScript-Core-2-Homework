/*
Create an object that acts like a water bottle. 
It will need a volume key to store how full or empty the bottle is. 
It will be 100 when full and 0 when empty. 
Give your water bottle methods for filling it up, 
drinking some of it, and emptying it.

We made a start on this for you here: 
*/

let bottle = {
  volume: 0,
  fill: function () {
    // calling this function should make your bottle's volume = 100;
  },
  drink: function () {
    // calling this function should decrease your bottle's volume by 10;
  },
  empty: function () {
    // this function should return true if your bottle's volume = 0
  }
};

/*
--TIP--

Remember that for changing properties on the current object inside one of its
methods you can refer to it by its variable name: `bottle`.

Once you have completed your object run your code and see if your answer 
matches the expected results :)
*/

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 2-water-bottle.js` into your terminal or run in VS code (F5)
*/

const { test } = require("./tests");

bottle.fill();
bottle.drink();
bottle.drink();
bottle.drink();

test(
  "Correct bottle volume after filling and drinking 3 times",
  bottle.volume === 70,
  "Volume is 70",
  `Volume is ${bottle.volume}`
);
test(
  "Bottle is not empty",
  bottle.empty() === false,
  "bottle.empty() returns false",
  `bottle.empty() returns ${bottle.empty()}`
);

// Empty the bottle to check whether the empty method is implemented correctly
bottle.drink();
bottle.drink();
bottle.drink();
bottle.drink();
bottle.drink();
bottle.drink();
bottle.drink();

test(
  "Bottle is empty after drinking 7 more times",
  bottle.empty() === true,
  "bottle.empty() returns true",
  `bottle.empty() returns ${bottle.empty()}`
);

// Check that bottle doesn't have a negative volume when drunk after emptying
bottle.drink();
let testContext = { volume: 0 };
bottle.fill.call(testContext); // Check that volume isn't zero just because .fill hasn't been implemented
test(
  "Volume should never be less than zero",
  testContext.volume === 100 && bottle.volume === 0,
  "Volume is 0 after drinking from an empty bottle",
  `Volume is ${bottle.volume} after drinking from an empty bottle`
);
