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
    Name : "Mole",
    Serving: 2,
    Ingredients: {
        a:"cinnamon",
        b:"cumin",
        c:"cocoa"
    }
};

  
console.log( `${recipes.Name} 
Serves: ${recipes.Serving}
Ingredients:
${recipes.Ingredients.a}
${recipes.Ingredients.b}
${recipes.Ingredients.c}`);
