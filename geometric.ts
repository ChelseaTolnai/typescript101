interface IGeometricFigure {
    area: () => number; // function "area" will return a number
    perimeter: () => number; // function "perimeter" will return a number
}

export class Square implements IGeometricFigure {
    side: number; // shape "Square" will accept a "side" number

    constructor(s: number) { //construct the class to accept the side number
        this.side = s // set the constructor's side to the given number
    }

    area = () => this.side * this.side // "area" function returns a number equal to a square's area given the side
    perimeter = () => this.side * 4 // "perimeter" function returns a number equal to a square's perimeter given length of side
}

export class Circle implements IGeometricFigure {
    radius: number; // shape "Circle" will accept a "radius" number

    constructor(r: number) { //construct the class to accept the radius number
        this.radius = r // set the constructor's radius to the given number
    }

    area = () => Math.PI * this.radius * this.radius; // "area" function returns a number equal to a circle's area given the radius
    perimeter = () => 2 * Math.PI * this.radius; // "perimeter" function returns a number equal to a circles's perimeter given length of radius
}

let square = new Square(3); // initiate a new Square with a side length of 3
console.log(square.area()); // call "area" to return that square's area (3*3)
console.log(square.perimeter()); // call "perimeter" to return same (3*4)

let circle = new Circle(3); // initiate a new Circle with a radius of 2
console.log(circle.area()); // call "area" to return that circle's area (pi * 3^2)
console.log(circle.perimeter()); // call "perimeter" to return same (2 * pi * 3)