/*
=========Bind==========
With the bind() method, an object can borrow a method from another object.
*/

var user = {
    firstName: "VH",
    age: 2,
    getAge: function()
    {
        return this.age;
    },
    sayHi: function()
    {
        return "Hello: " + this.firstName;
    }
}
console.log("\n====================Age1=====================")
var myAge = user.getAge;
console.log("Type of myAge: " + typeof(myAge)); //function
console.log("Type of Age: " + myAge); //will print the function

console.log("\n====================Age2=====================")
var myAge2 = user.getAge(); //here you already execute the getAge function
console.log("Type of myAge: " + typeof(myAge2)); //number (value type return by the getAge function)
console.log("Type of Age: " + myAge2); //2 (value return by the getAge function)

console.log("\n====================Age3=====================")
var myunboundedAge = user.getAge;
console.log("Type of myunboundedAge: " + typeof(myunboundedAge)); //function
console.log("Value of myunboundedAge: " + myunboundedAge()); //undefined

console.log("\n====================Bind=====================")
//this sample use bind
var myunboundedAge2 = user.getAge;
var myboundedAge2 = myunboundedAge2.bind(user);
console.log("Type of myboundedAge2: " + typeof(myboundedAge2)); //function
console.log("Value of myboundedAge2: " + myboundedAge2()); //2 

