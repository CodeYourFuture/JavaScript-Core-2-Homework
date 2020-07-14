/* 
A coffee machine is defined below. 
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee 
only if the inserted amount is greater or equal than the price of the coffee!
*/

let coffeeMachine = {
    brand: "Super Coffee",
    prices: {
        cappuccino: 2.40,
        blackCoffee: 1.50,
        flatWhite: 3.00
    },
    insertedAmount: 0,
    insertMoney: function (amount) {
        return insertedAmount = amount;
    },
    getCoffee: function (coffee) {
        // check coffee entered matches the correct amount
        // if true, return Please take your coffee
        // if false, return Sorry
        if (insertedAmount >= 3 && coffee === "flatWhite") {
            return `Please take your ${coffee}`;
        } else if (insertedAmount < 3 && coffee === "flatWhite") {
            return `Sorry you don't have enough money for a ${coffee}`;


        } else if (insertedAmount >= 2.4 && coffee === "cappuccino") {
            return `Please take your ${coffee}`;
        } else if (insertedAmount < 2.4 && coffee === "cappuccino") {
            return `Sorry you don't have enough money for a ${coffee}`;


        } else if (insertedAmount >= 1.5 && coffee === "blackCoffee") {
            return `Please take your ${coffee}`;
        } else if (insertedAmount < 1.5 && coffee === "blackCoffee") {
            return `Sorry you don't have enough money for a ${coffee}`;
        }
    }
};


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

coffeeMachine.insertMoney(2.40);
console.log(`Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee('cappuccino')}`);

coffeeMachine.insertMoney(1.50);
console.log(`Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee('blackCoffee')}`);

coffeeMachine.insertMoney(4.00);
console.log(`Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee('flatWhite')}`);

coffeeMachine.insertMoney(2.40);
console.log(`Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee('flatWhite')}`);

