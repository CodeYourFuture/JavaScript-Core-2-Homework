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
    Title: "Fried rice",
    serving: 5,
    Ingredients: {
        ingredient1: "rice",
        ingredient2: "mixedVegetable",
        ingredient3: "curry", 
        ingredient4: "thyme",
        ingredient5: "seasoning cube",
        ingredient6: "salt",
        ingredient7: "vegetable Oil"

    }
};
console.log(`${recipes.Title}`);
console.log(`Serves: ${recipes.serving}`);
console.log('Ingredients:');
console.log(recipes.Ingredients.ingredient1);
console.log(recipes.Ingredients.ingredient2);
console.log(recipes.Ingredients.ingredient3);
console.log(recipes.Ingredients.ingredient4);
console.log(recipes.Ingredients.ingredient5);
console.log(recipes.Ingredients.ingredient6);
console.log(recipes.Ingredients.ingredient7);


