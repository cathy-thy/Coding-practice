console.log("------------Array------------")
var intList1 = new Array(80, 30, 20, 10, 45);
console.log(`Size of intList1: ${intList1.length}`); //5

console.log("\n------------Array.of------------")

var intList2 = Array.of(10);
console.log(`Size of intList2: ${intList2.length}`); //1
console.log(`intList2: ${intList2}`);               //10

console.log("\n------------Array.push------------")

intList1.push(900);
console.log(`Size of intList1: ${intList1.length}`); //6
console.log(`intList1: ${intList1}`);               //80,30,20,10,45,900

console.log("\n------------Array.from------------")

//everything in the array is adding 100
var result1 = Array.from(intList1, (num)=>{return (num+100)});
console.log(`Result 1 is ${result1}`);

console.log("\n------------Array.find------------")
console.log(`intList1: ${intList1}`);   
var result2 = intList1.find((num, index, myarray)=>{
    if(num>=45){   //return the first value >=45
        return true;
    }
})
console.log(`Result 2 is ${result2}`);              

console.log("\n------------Array.map------------")
var result3 = intList1.map((num, index,myArray)=>{
    return num>=45;
})
console.log(`Result 3 is ${result3}`);  

console.log("\n------------Array.filter------------")
var result4 = intList1.filter((num)=>{
    return num>=45;
})
console.log(`Result 4 is ${result4}`); 

console.log("\n------------Destructuring------------")
var emp = {"empId":111, "name":"VH", salary:900.0};
var [num1, num2, num3] = intList1;  //array
console.log(`num1 = ${num1} num2 = ${num2} num3 = ${num3}`);
var {empId, name, salary} = emp;    //dictionary
console.log(`Id: ${empId}  Name: ${name}  Sal: ${salary}`);
