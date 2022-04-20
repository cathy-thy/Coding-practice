/*
=========Callback==========
A callback function is a function passed into another function 
as an argument,
*/
//self invocation syntax
var showCount = (
    function()
    {
        var counter = 0;
        return function()
        {
            counter = counter+1;
            console.log("Counter: " + counter);
            return counter;
        }
    }
)();

console.log("Type of showCount: " + typeof(showCount));     //function
console.log("Value of showCount: " + showCount); 
console.log("Call showCount: " + showCount());              //1
//----------------------------------------------------------------------
//Show how to pass value into outer and inner function
var outerFun = (
    function (a)
    {
        console.log("a = " + a);
        var innerFun = function (b)
        {
            console.log("b = " + b);
            let sum = a + b;
            console.log("Sum = " + sum);
        }
        return innerFun;
    }
)(80);  //a = 80

var inner = outerFun(90); //b = 90      
console.log("-----Type of inner-----" + typeof(inner)); //undefined, because inside the "innerFun", nth is return