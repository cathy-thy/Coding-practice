/*
=========Destructuring==========
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, 
or properties from objects, into distinct variables.
*/

console.log("\n------------Destructuring------------")
var emp = {"empId":111, "name":"VH", salary:900.0};
var [num1, num2, num3] = intList1;  //array
console.log(`num1 = ${num1} num2 = ${num2} num3 = ${num3}`);
var {empId, name, salary} = emp;    //dictionary
console.log(`Id: ${empId}  Name: ${name}  Sal: ${salary}`);