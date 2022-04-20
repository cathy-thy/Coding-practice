/*
=========Arrow==========
*/
var add = (a,b) =>{return (a+b)}      //return is optional
console.log(add(20,20));              //40


/*
=========Callback==========
A callback function is a function passed into another function 
as an argument,
*/
var greetMe = function(name){
    return "Welcome to CG: " + name;
}

var wishMe = function (callback, name, year){
    console.log(callback(name) + "- Year: " + year);
}

wishMe(greetMe, "Vaishali", 2022);

var counter = 0;
function add()
{
    return function plus()
    {
        return counter+1;
    }
}
var pl = add();
console.log("Type of pl: " + typeof(pl));       //function
console.log("pl: " + (pl));

var count = pl();
console.log("Type of count: " + typeof(count)); //number
console.log("count: " + (count));               //1



