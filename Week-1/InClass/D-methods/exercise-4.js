/* 
Alice has a list of good friends. 
Define a method "makeFriend" to add a new friend to her list.
*/


let person = {
    name: "Alice",
    friends: ["John", "Nina"]
};
person.makeFriend = function(newFriends){
    return this.friends.push(newFriends);
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.makeFriend("Bob");
person.makeFriend("Alice");
console.log(`Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`);