/*

Think of 5 different real world "things" that you 
can describe with a JavaScript object

Assign each of them to a separate variable

*/
let animal = {
  name: "Cat",
  numLegs: 4,
  nickName: "Hurayrah",
  hasFur: true,
  food: ["milk", "fish"],
};

let petsNickName = animal.nickName;
console.log(petsNickName);
let foodAnimalLikes = animal["food"];
console.log(foodAnimalLikes)