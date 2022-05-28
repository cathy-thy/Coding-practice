"use strict";
//use class defined in another typescript file
exports.__esModule = true;
var Mathmodule = require("./classdemo");
var obj = new Mathmodule.Circle(2);
console.log(obj.getArea());
console.log(Mathmodule.pi);
