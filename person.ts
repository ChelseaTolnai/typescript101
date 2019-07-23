type gender = "F" | "M";
type subscription = "free" | "basic" | "premium"

class Person {
    name: string;
    age?: number;
    gender: gender
}

interface IEmployee extends Person {
    readonly empID: number;
    startDate: Date;
    SSN: number;
} 

interface ICustomer extends Person {
    custID: number;
    subscription: string;
} 

interface IBoth extends IEmployee, ICustomer {}

// let emp1 = new IEmployee() // WRONG - Cannot create instance of interface
// let emp1: IEmployee = {} // WRONG - must provide all required key values
let emp1: IEmployee = { // no errors even though no age
    name: "Chelsea", 
    gender: "F", // Can only be F or M
    empID: 1,
    startDate: new Date(),
    SSN: 555555555,
}

let both1: IBoth = {
    name: "Mimi", 
    age: 23,
    gender: "F",
    empID: 2,
    startDate: new Date(),
    SSN: 444444444,
    custID: 1,
    subscription: "premium"
}

console.log(emp1.gender); // F
console.log(emp1.age); // undefined
console.log(emp1.empID); // 1
emp1.age = 27;
// emp1.empID = 2; // CANNOT over write readonly empID
console.log(emp1.age); // 27

