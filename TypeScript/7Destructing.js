"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "Swarup",
    id: 1,
    email: "swarup@gmail.com"
};
// Destructuring of objects
let { name: myName, id: myId, email: myEmail } = user;
// Destructuring of arrays
let arr = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = arr;
console.log(`${a} ${b} ${c} ${d} ${e}`);
let [num1, num2, ...restNums] = arr;
console.log(num1);
console.log(num2);
console.log(restNums);
