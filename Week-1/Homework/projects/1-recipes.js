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
  title: 'Mole',
  serves: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa'],
};

console.log (recipes.title);
console.log (`${Object.keys (recipes)[1]}: ${recipes.serves}`);
console.log (`${Object.keys (recipes)[2]}: `);
for (let i = 0; i < recipes.ingredients.length; i++) {
  console.log (recipes.ingredients[i]);
}
