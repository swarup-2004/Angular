"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_password;
Object.defineProperty(exports, "__esModule", { value: true });
// Creating a class `Employee`
// In TypeScript, only one type of constructor is allowed per class (either default or parameterized).
class Employee {
    // Constructor to initialize the class properties
    constructor(id, name, address, age) {
        // Private member
        // `#password` is a private field only accessible within the `Employee` class
        _Employee_password.set(this, void 0);
        this.id = id;
        this.name = name;
        this.address = address;
        this.age = age;
        // Increment the static `count` property each time an instance is created
        Employee.count++;
    }
    // Static method
    // This method is used to get the current value of the static `count` property
    static getCount() {
        return Employee.count;
    }
    // Getter method for the `name` property
    get empName() {
        return `My name is ${this.name}`;
    }
    // Setter method for the `#password` private property
    set empPassword(password) {
        __classPrivateFieldSet(this, _Employee_password, password, "f");
    }
    // Instance method
    // A simple method to display a welcome message
    greet() {
        console.log("Welcome");
    }
    // Implement a function of interface
    Login() {
        return {
            name: "Swarup",
            id: 1,
            email: "swarup@gmail.com"
        };
    }
}
_Employee_password = new WeakMap();
// Static member
// `count` is a static property shared among all instances of the class
Employee.count = 0;
// Creating a derived class `Admin` that extends the `Employee` class
class Admin extends Employee {
    // Constructor for `Admin` class
    // Calls the parent class constructor using `super` to initialize properties
    constructor(id, name, address, age) {
        console.log("I am admin");
        super(id, name, address, age); // Call to parent class constructor
    }
    // Getter to access the protected `age` property from the parent class
    get adminAge() {
        return this.age;
    }
}
// Creating an instance of the `Employee` class
let emp = new Employee(1, "Swarup", "Pune", 20);
// Logging the employee object
console.log(emp);
// Accessing the getter method for the `name` property
console.log(emp.empName);
// Setting a password using the setter method
emp.empPassword = 12345;
// Creating an instance of the `Admin` class
let admin = new Admin(2, "Ram", "Mumbai", 45);
// Accessing the protected `age` property using the `adminAge` getter
console.log(admin.adminAge);
// Accessing the static property `count` directly via the `Employee` class
console.log(Employee.count);
// Calling the static method `getCount` to get the current count of employees
console.log(Employee.getCount());
