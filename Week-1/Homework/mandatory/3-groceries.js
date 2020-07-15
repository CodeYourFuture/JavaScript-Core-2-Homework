// You're going shopping, and you need a shopping list.
// 1. Update your groceryList with the items you need: Potatoes, Orange Juice and Rice.
// 2. Loop through the groceryList object to gather the item properties into the groceriesToBuy array.
// 3. Then use console.log() to print out the list. It should print ['Potatoes', 'Orange Juice', 'Rice']

let groceriesToBuy = [];

let groceryList = {
  item1: "Potatoes",
  item2: "Orange Juice",
  item3: "Rice"
};

// https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/#:~:text=To%20convert%20an%20object%20to%20an%20array%20you%20use%20one,entries()%20.

groceriesToBuy = Object.values(groceryList);

console.log(groceriesToBuy);