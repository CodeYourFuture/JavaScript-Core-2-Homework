let myArr = ["keep1", "remove", "keep3", "remove", "keep5"];
 


function removeEl(arr){
  let newArr =[];
    for(let i=0; i< arr.length; i= i + 2){
     newArr.push(arr[i]);
    
     
    }
 return newArr;
}

console.log(removeEl(myArr));