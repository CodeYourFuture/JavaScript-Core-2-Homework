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
    name: 'Cinnamon porridge oats with banana and berries',
    servings: 1,
    ingredients: ['almond milk', 'oats', 'cinnamon', 'wallnuts', 'flax seeds', 'banana',  'berries']
};


console.log(`${recipes.name} \n Serves: ${recipes.servings} \n Ingredients: \n ${recipes.ingredients.map(item=> item)}`);
