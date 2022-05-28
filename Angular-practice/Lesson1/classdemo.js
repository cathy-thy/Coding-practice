"use strict";
exports.__esModule = true;
exports.Circle = exports.pi = void 0;
exports.pi = 3.14;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return exports.pi * this.radius * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
var obj = new Circle(2);
console.log(obj.getArea());
