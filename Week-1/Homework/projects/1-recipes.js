/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- Title (a string), 
- Servings (a number), and 
- Ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

**/

let recipes = {
  title: "Fluffy Pancakes",
  servings: 4,
  ingredients: [
    "flour",
    "melted butter",
    "milk",
    "bicarbonate of Soda",
    "salt",
    "sugar",
    "egg",
    "vinegar",
  ],
};

// console.log(`${recipes.title}
// Serves: ${recipes.servings}
// Ingredients: `);


console.log(`${recipes.title}`);
console.log(`Serves: ${recipes.servings}`);
console.log(`Ingredients:`);
for (let key in recipes.ingredients) {
  console.log(recipes.ingredients[key]);
}
