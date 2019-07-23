var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(r) {
        var _this = this;
        this.area = function () { return Math.PI * _this.radius * _this.radius; }; // "area" function returns a number equal to a circle's area given the radius
        this.perimeter = function () { return 2 * Math.PI * _this.radius; }; // "perimeter" function returns a number equal to a circles's perimeter given length of radius
        this.radius = r; // set the constructor's radius to the given number
    }
    return Circle;
}());
var Rectanglur = /** @class */ (function () {
    function Rectanglur(l, h) {
        var _this = this;
        this.area = function () { return _this.length * _this.height; }; // "area" function returns a number equal to a rectangles's area given the length and height
        this.perimeter = function () { return (_this.length * 2) + (_this.height * 2); }; // "perimeter" function returns a number equal to a rectangle's perimeter given length and height
        this.length = l; // set the constructor's length to the given number
        this.height = h ? h : l; // set the constructor's height to the given number if given; if no height given assumes a square
    }
    return Rectanglur;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Square;
}(Rectanglur));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(Rectanglur));
var circle = new Circle(1); // initiate a new Circle with a radius of 2
console.log(circle.area()); // call "area" to return that circle's area (pi * 1)
console.log(circle.perimeter()); // call "perimeter" to return same (2 * pi * 1)
var square = new Square(3); // initiate a new Square with a side length of 3
console.log(square.area()); // call "area" to return that square's area
console.log(square.perimeter()); // call "perimeter" to return same 
var rectangle = new Rectangle(2, 3); // initiate a new Rectangle with a length of 2 and height of 3
console.log(rectangle.area()); // call "area" to return that rectangle's area
console.log(rectangle.perimeter()); // call "perimeter" to return same
