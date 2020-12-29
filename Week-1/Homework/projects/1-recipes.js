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
    Title:"Mole",
    Serves: 2,
    Ingredients:["cinnamon","cumin","cocoa"]
};
console.log(recipes.Title);
console.log("Serve: "+recipes.Serves);
console.log("Ingredients:");
console.log(recipes.Ingredients[0]);
console.log(recipes.Ingredients[1]);
console.log(recipes.Ingredients[2]);