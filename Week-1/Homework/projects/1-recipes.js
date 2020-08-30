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
//https://stackoverflow.com/questions/54851645/how-to-display-both-key-and-value-in-object-using-javascript/54851680

let recipes = {
    Title: 'Mole',
    Serves: 2,
    Ingredients: [
        'cinnamon',
        'cumin',
        'cocoa',
    ]
};

for (let key in recipes) {
    console.log(key, recipes[key]);
  }