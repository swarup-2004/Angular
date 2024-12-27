"use strict";
// Defining function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
const sub = (num1, num2) => {
    return num1 - num2;
};
console.log(sub(3, 4));
const mult = function (num1, num2) {
    return num1 * num2;
};
// Optional Parameters
const add1 = (num1, num2, num3) => {
    return num3 ? num1 + num2 + num3 : num1 + num2;
};
console.log(add1(3, 4));
console.log(add1(4, 5, 6));
// Default Parameters
const sub2 = (num1, num2, num3 = 4) => {
    return num1 - num2 - num3;
};
// Rest Parameters
const sum = (...args) => {
    let sum = 0;
    for (let x of args) {
        sum += x;
    }
    return sum;
};
console.log(sum(1, 2, 3, 4, 5));
