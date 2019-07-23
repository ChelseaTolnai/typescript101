var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// let emp1 = new IEmployee() // WRONG - Cannot create instance of interface
// let emp1: IEmployee = {} // WRONG - must provide all required key values
var emp1 = {
    name: "Chelsea",
    gender: "F",
    empID: 1,
    startDate: new Date(),
    SSN: 555555555
};
var both1 = {
    name: "Mimi",
    age: 23,
    gender: "F",
    empID: 2,
    startDate: new Date(),
    SSN: 444444444,
    custID: 1,
    subscription: "premium"
};
console.log(emp1.gender); // F
console.log(emp1.age); // undefined
console.log(emp1.empID); // 1
emp1.age = 27;
// emp1.empID = 2; // CANNOT over write readonly empID
console.log(emp1.age); // 27
