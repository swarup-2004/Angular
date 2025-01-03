import {Login, User} from './6Interfaces';


// Creating a class `Employee`
// In TypeScript, only one type of constructor is allowed per class (either default or parameterized).
class Employee implements Login {
    // Public properties
    id!: number; // Employee ID
    name!: string; // Employee name
    address!: string; // Employee address

    // Private member
    // `#password` is a private field only accessible within the `Employee` class
    #password!: number;

    // Protected member
    // `age` is accessible within the `Employee` class and its subclasses
    protected age!: number;

    // Static member
    // `count` is a static property shared among all instances of the class
    static count: number = 0;

    // Constructor to initialize the class properties
    constructor(id: number, name: string, address: string, age: number) {
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
    get empName(): string {
        return `My name is ${this.name}`;
    }

    // Setter method for the `#password` private property
    set empPassword(password: number) {
        this.#password = password;
    }



    // Instance method
    // A simple method to display a welcome message
    greet(): void {
        console.log("Welcome");
    }


    // Implement a function of interface
    Login(): User {
        return {
            name: "Swarup",
            id: 1,
            email: "swarup@gmail.com"
        };
    }
}

// Creating a derived class `Admin` that extends the `Employee` class
class Admin extends Employee {
    // Constructor for `Admin` class
    // Calls the parent class constructor using `super` to initialize properties
    constructor(id: number, name: string, address: string, age: number) {
        console.log("I am admin");
        super(id, name, address, age); // Call to parent class constructor
    }

    // Getter to access the protected `age` property from the parent class
    get adminAge() {
        return this.age;
    }
}

// Creating an instance of the `Employee` class
let emp: Employee = new Employee(1, "Swarup", "Pune", 20);

// Logging the employee object
console.log(emp);

// Accessing the getter method for the `name` property
console.log(emp.empName);

// Setting a password using the setter method
emp.empPassword = 12345;

// Creating an instance of the `Admin` class
let admin: Admin = new Admin(2, "Ram", "Mumbai", 45);

// Accessing the protected `age` property using the `adminAge` getter
console.log(admin.adminAge);

// Accessing the static property `count` directly via the `Employee` class
console.log(Employee.count);

// Calling the static method `getCount` to get the current count of employees
console.log(Employee.getCount());
