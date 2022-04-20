/*
=========var, let==========
(var, let) or (let,let) is allowed
let, var is not allowed
*/

var i = 100;
{
    let i = 50;
    {
        let i =25;
        console.log("inner i = " + i); //25
    }
    console.log("outer i = " + i); //50
}
console.log("outer i = " + i); //100

/*
=========Rest Operator==========
The rest operator (…) allows us to call a function with any number of arguments 
and then access those excess arguments as an array
*/
function add(...nums)
{
    let sum = 0;
    for (num of nums){
        sum = sum + num;
    }
    return sum;
}

var sum1 = add(90, 100);
var sum2 = add(90);
var sum3 = add(90, 100, 200);
var sum4 = add(90, 100, 80, 10);
let numList = new Array (20, 0, 10, 40, 30, 10, 70.50);

//--------------Spread operation--------------
//The JavaScript spread operator ( ... ) allows us to 
//quickly copy all or part of an existing array or object into another array or object.
let sum5 = add(...numList);

console.log("Summation: " + sum1); //190
console.log("Summation: " + sum2); //90
console.log("Summation: " + sum3); //390
console.log("Summation: " + sum4); //280
console.log("Summation: " + sum5); //180.5