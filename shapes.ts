interface Shape {
    area: () => number; // function "area" will return a number
    perimeter: () => number; // function "perimeter" will return a number
}

interface OneSided extends Shape { // One sided shapes will have area and perimeter functions
    radius: number; // but will also expect a radius
}

interface FourSided extends Shape { // Four Sided shapes will have area and perimeter functions
    length: number; // but will also expect a length
    height: number; // and a height
}

class Circle implements OneSided { // A circle is one sided
    radius: number; // therefore it accepts a "radius" number

    constructor(r: number) { //construct the class to accept the radius number
        this.radius = r // set the constructor's radius to the given number
    }

    area = () => Math.PI * this.radius * this.radius; // "area" function returns a number equal to a circle's area given the radius
    perimeter = () => 2 * Math.PI * this.radius; // "perimeter" function returns a number equal to a circles's perimeter given length of radius
}

class Rectanglur implements FourSided { // Rectanglar shapes are four sided
    length: number; // therefore accepts a length
    height: number; // and a height

    constructor(l: number, h?: number) { //construct the class to accept the length and optional height number
        this.length = l // set the constructor's length to the given number
        this.height = h ? h : l // set the constructor's height to the given number if given; if no height given assumes a square
    }

    area = () => this.length * this.height // "area" function returns a number equal to a rectangles's area given the length and height
    perimeter = () => (this.length * 2) + (this.height * 2) // "perimeter" function returns a number equal to a rectangle's perimeter given length and height
}

class Square extends Rectanglur {}

class Rectangle extends Rectanglur {}


let circle: Circle = new Circle(1); // initiate a new Circle with a radius of 2
console.log(circle.area()); // call "area" to return that circle's area (pi * 1)
console.log(circle.perimeter()); // call "perimeter" to return same (2 * pi * 1)

let square: Square = new Square(3); // initiate a new Square with a side length of 3
console.log(square.area()); // call "area" to return that square's area
console.log(square.perimeter()); // call "perimeter" to return same 

let rectangle: Rectangle = new Rectangle(2, 3); // initiate a new Rectangle with a length of 2 and height of 3
console.log(rectangle.area()); // call "area" to return that rectangle's area
console.log(rectangle.perimeter()); // call "perimeter" to return same