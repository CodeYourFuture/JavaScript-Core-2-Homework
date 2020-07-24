let myArr = [57, 99, 14, 32];
let newArr = [];



function diffInAge(arr){

    arr.sort(function(a, b) {
        return a-b;
    });
    
    let lowestAge = arr[0];
    let highestAge = arr[arr.length -1];
    let diff = highestAge - lowestAge;
    
    newArr.push(lowestAge);
    newArr.push(highestAge);
    newArr.push(diff);

    return newArr;
}


console.log(diffInAge(myArr));