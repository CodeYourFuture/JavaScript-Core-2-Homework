let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
let myArr = ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"];
let newArr = [];

function gooseFilter(arr){
   for(let i=0; i< arr.length; i++){
       if(geese[0] !== arr[i] && geese[1] !== arr[i] && geese[2] !== arr[i] && geese[3] !== arr[i] && geese[4] !== arr[i]){
           newArr.push(arr[i]);
       }
   }
    return newArr;
   
}

console.log(gooseFilter(myArr));