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
    Title: "Mole",
    Serves: 2,
    Ingredients: ["cinnamon", "cumin", "cocoa"]
};

const show = [[0, 1], [1, 1], [1, 0]];
var count = 0;
for(let key in recipes){
    console.log(["",key + ": "][show[count][0]] + ["", recipes[key]][show[count][1]]);
    count++;
}
for(let ingr in recipes.Ingredients){
    console.log(recipes.Ingredients[ingr]);
}
