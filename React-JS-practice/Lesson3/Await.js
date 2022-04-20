
/*
=========Async & Await==========
An async function can contain an await expression, 
that pauses the execution of the async function and waits for the passed Promise's resolution, 
and then resumes the async function's execution and returns the resolved value.

async makes a function return a Promise
await makes a function wait for a Promise

The await operator is used to wait for a Promise. It can only be used inside an async function
*/

//--------------------------Example 1--------------------------
console.log("Program starts here...")
async function show(fname)
{
    let prm = new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
                resolve("Welcome to CG " + fname);
            },5000) //whole program will wait for 5 second before termination
        }
    );
    //adding await here, it will wait for prm to finish
    let result = await prm; //if you dont use async and await, then the message may not printed
    //await completes, print result
    console.log("Display Result: " + result); //result = [object Promise]
    return result;
}

var r = show("Fion");
console.log("r is " + r); //[object Promise]
console.log("Program ends here...");
