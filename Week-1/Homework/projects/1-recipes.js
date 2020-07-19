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
    title:"Brownie",
    servings:"10",
    ingredients:["eggs","Chocolate","Flour","Butter","Sugar"]
};

function display(obj)
{
    for(item in obj)
    {
        value= obj[item];
        arr=Array.isArray(value);
        if(arr)
        {
            console.log(item+":");            
            console.log(value.join('\r\n'));
        }
        else
            console.log(value);
    }
}

display(recipes);