require("./tests"); // This line is to help with running tests, please ignore this and move on to the challenge below

// You're going shopping, and you need a shopping list.
// 1. Update your groceryList with the items you need: Potatoes, Orange Juice and Rice.
// 2. Loop through the groceryList object to gather the item properties into the groceriesToBuy array.
// 3. Then use console.log() to print out the list. It should print ['Potatoes', 'Orange Juice', 'Rice']

let groceriesToBuy = [];

let groceryList = {
  item1: "",
  item2: "",
  item3: ""
};


/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 3-groceries.js` into your terminal or run in VS code (F5)
*/

const { test, logged } = require("./tests");

const expectedGroceryList = {
  item1: "Potatoes",
  item2: "Orange Juice",
  item3: "Rice",
};

const expectedGroceriesToBuy = ["Potatoes", "Orange Juice", "Rice"];

test(
  "Grocery list object has correct property values",
  JSON.stringify(expectedGroceryList) === JSON.stringify(groceryList),
  JSON.stringify(expectedGroceryList, null, "\t"),
  JSON.stringify(groceryList, null, "\t")
);
test(
  "Groceries to buy array has correct values",
  JSON.stringify(expectedGroceriesToBuy) === JSON.stringify(groceriesToBuy),
  JSON.stringify(expectedGroceriesToBuy),
  JSON.stringify(groceriesToBuy)
);
test(
  "Logs groceries to buy array correctly",
  JSON.stringify(expectedGroceriesToBuy) === JSON.stringify(logged[0]),
  `Logs ${JSON.stringify(expectedGroceriesToBuy)}`,
  `Logs ${JSON.stringify(logged[0])}`
);
