"use strict";
// String
let lname;
lname = "Santosh";
let newName = lname.toUpperCase();
console.log(newName);
// Numbers
let age = 25;
let percent = 34.4;
// Boolean
let isValid = true;
// Array
let arr;
let generic;
arr = ["ram", "shyam", "rajat"];
generic = [1, 2, 3];
let result = generic.filter((num) => num > 2);
console.log(result);
let c = 1 /* Color.Blue */;
// Tuples
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums);
// any -> try to not use it
let department;
department = 10;
department = "ram";
// void -> when the function doesn't return anything
// never


console.log(this);