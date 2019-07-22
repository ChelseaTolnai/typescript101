"use strict";
exports.__esModule = true;
var Square = /** @class */ (function () {
    function Square(s) {
        var _this = this;
        this.area = function () { return _this.side * _this.side; }; // "area" function returns a number equal to a square's area given the side
        this.perimeter = function () { return _this.side * 4; }; // "perimeter" function returns a number equal to a square's perimeter given length of side
        this.side = s; // set the constructor's side to the given number
    }
    return Square;
}());
exports.Square = Square;
var Circle = /** @class */ (function () {
    function Circle(r) {
        var _this = this;
        this.area = function () { return Math.PI * _this.radius * _this.radius; }; // "area" function returns a number equal to a circle's area given the radius
        this.perimeter = function () { return 2 * Math.PI * _this.radius; }; // "perimeter" function returns a number equal to a circles's perimeter given length of radius
        this.radius = r; // set the constructor's radius to the given number
    }
    return Circle;
}());
exports.Circle = Circle;
var square = new Square(3); // initiate a new Square with a side length of 3
console.log(square.area()); // call "area" to return that square's area (3*3)
console.log(square.perimeter()); // call "perimeter" to return same (3*4)
var circle = new Circle(3); // initiate a new Circle with a radius of 2
console.log(circle.area()); // call "area" to return that circle's area (pi * 3^2)
console.log(circle.perimeter()); // call "perimeter" to return same (2 * pi * 3)
