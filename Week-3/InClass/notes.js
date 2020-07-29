/*
sync  = in order 1 then 2 then 3
async = 1, 1, 1, same time

callback - passed as a paramater in other function
 good for async

if it takes a long time pass as call back and then get result later

setTimeout(function() {
    console.log("hello"); // all would print after timeout
}, 3000) // mili seconds 1000 ms = 1 sec

setInterval:

setInterval(function() {
    console.log("hi");
}, 3000)

*/