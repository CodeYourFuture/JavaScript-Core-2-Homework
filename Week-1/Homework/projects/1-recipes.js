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
    title: "Banana Bread",
    Serves: 2,
    Ingredients: ["Banana","Flour","Egg","Milk"]
};
/*Object.entries(recipes).forEach(([key, value]) => {
    console.log();})*/ 
    console.log(recipes.title)
    console.log(`Serves: ${recipes.Serves}`)
    console.log("Ingredients:")
    console.log(recipes.Ingredients + "\n")
