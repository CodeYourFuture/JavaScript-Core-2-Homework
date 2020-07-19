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
	Title: 'Tiramiso',
	Serves: 6,
	Ingredients: [ 'Double Cream', 'Choclate', 'Sugar', 'Biscuite', 'Caramel' ]
};
console.log(recipes.Title);
console.log(`Serves : ${recipes.Serves}`);
console.log(`Ingredients:`);
for (var i = 0; i < recipes.Ingredients.length; i++) {
	console.log(recipes.Ingredients[i]);
}
