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
  title: "Chocolate Chip Cookies",
  servings: 5,
  ingredients: [
    "Sugar",
    "Flour",
    "Butter",
    "Egg",
    "Vanilla Extract",
    "Chocolate Chips",
  ],
};

console.log(recipes.title);
console.log(`Serves: ${recipes.servings}`);
console.log("Ingredients:");
recipes.ingredients.forEach((ingredient) => console.log(ingredient));
