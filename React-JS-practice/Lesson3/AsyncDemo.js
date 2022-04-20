/*
=========Async==========
Async functions always return a promise
*/


var greetMe = async function(name)
{
    return ("Welcome to CG: " + name);
    //reject ("No greet");
}
var msg = greetMe("VH");
console.log("Type of msg :" + typeof(msg)); //object
console.log("Message:" + msg);              //[object Promise]

msg.then((msgRes)=>{console.log(msgRes)})
.catch((msgErr)=>{console.log(msgErr)})


