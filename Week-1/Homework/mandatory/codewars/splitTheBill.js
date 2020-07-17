
//CHANGE THE VALUES BELOW TO DECIMALS TO CHECK CODE
let group = {
    A: 20, 
    B: 15, 
    C: 10
};

//FUNCTION TO CALCULATE THE TOTAL BILL
function calculateTotalBill(obj){
    let totalBill = 0;
    let groupTotal = Object.values(obj);
    for(let i=0; i < groupTotal.length; i++){
        totalBill += groupTotal[i];
    }
    return totalBill;
}

//FUNCTION TO WORK OUT HOW MANY FRIENDS THAT WILL SHARE THE BILL
function calculatePersons(obj){
    let numOfFriends = Object.keys(obj).length;
    return numOfFriends;

}


function splitTheBill(obj){

   let newObj = {};     
   let bill = calculateTotalBill(obj);  //gets total bill amount.
   let friends = calculatePersons(obj); //calculates the number of friends.
   let equalShare = bill / friends;     //gets amount each person has to pay.
   let arrayOfObjectValues = Object.values(obj); //VALUE ARRAY
   let arrayOfObjectKeys = Object.keys(obj);     //KEY ARRAY

   //loop through key and value arrays and add to new Object
    for(let i=0; i< arrayOfObjectValues.length; i++){
         let result = arrayOfObjectValues[i] - equalShare;
        // let result2 = arrayOfObjectValues[i+1] - equalShare;
        // let result3 = arrayOfObjectValues[i+2] - equalShare; 


         newObj[arrayOfObjectKeys[i]] = arrayOfObjectValues[i] - equalShare; 
       
    }
    if(newObj.A % 1 !== 0){
       //return `decimal number!`;
       for(let i=0; i< arrayOfObjectValues.length; i++){
        let result = arrayOfObjectValues[i] - equalShare;
        newObj[arrayOfObjectKeys[i]] = result.toFixed(1);
       }
       return newObj;

    }else {
        //return `whole num`;
        for(let i=0; i< arrayOfObjectValues.length; i++){
            newObj[arrayOfObjectKeys[i]] = arrayOfObjectValues[i] - equalShare; 
         }
         return newObj;
    }
   
  
}
console.log(splitTheBill(group));