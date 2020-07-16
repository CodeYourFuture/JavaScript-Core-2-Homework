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
    title : 'keledos',
    serves : 4,
    Ingredients : ['Potatoes', 'onion' , 'parsley' , 'pepper']
};

console.log(recipes.title);
console.log(`Srves : ${recipes.serves}`);
console.log(`Ingredients: ${recipes.Ingredients.toString()}`);
