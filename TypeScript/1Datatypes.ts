// String
let lname: string;
lname = "Santosh";
let newName = lname.toUpperCase();
console.log(newName);

// Numbers
let age: number = 25;
let percent: number = 34.4;

// Boolean
let isValid: boolean = true;

// Array
let arr: string[];
let generic: Array<number>;

arr = ["ram", "shyam", "rajat"];
generic = [1, 2, 3];

let result = generic.filter((num) => num > 2);
console.log(result);


// Enum

const enum Color {
    Red,
    Blue,
    Yellow
}

let c: Color = Color.Blue;

// Tuples
let swapNums: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNums = swapNumbers(10, 20);
console.log(swapNums);

// any -> try to not use it
let department: any;
department = 10;
department = "ram";

// void -> when the function doesn't return anything

// never
