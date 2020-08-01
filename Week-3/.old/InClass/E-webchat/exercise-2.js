/*

========
Task 2
========

Your second task is to send a new message to the server.

After writing a message in the input and clicking on the submit button,
send the message to store it on the remote server. Use the following API:

HTTP Verb: POST
API: https://codeyourfuture.herokuapp.com/api/messages
Request Body: { "content": "some text" }


===============
Expected result
===============

After opening index.html in your browser, write a message in the input field and click
on the submit button. Then check the following:

1) The input field should be empty.
2) When you refresh the page in your browser, you should be able to see your new message in the message list.
*/


// Write your code here
// document.getElementById("submit").addEventListener("click", submit);
// function submit(){
//     let url = `https://codeyourfuture.herokuapp.com/api/messages`;
// fetch(url).then(function(response) {
//     return response.text();
// }).then(function(message){
//     let myMessage = document.getElementById("message-list").value;
//     console.log(message);
//     myMessage.innerText = message.;
//     console.log(myMessage);
//     return;
  
// })
// }

let myObj ={
    name: "Ade",
    Age: 37
}
localStorage.setItem("myObj", myObj);
console.log(localStorage);
