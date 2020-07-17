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

let recipe = {
    name: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log(recipe.name);
console.log("Serves: " + recipe.servings);
console.log("Ingredients:");
for (i = 0; i < recipe.ingredients.length; ++i) {
    console.log(recipe.ingredients[i]);
}