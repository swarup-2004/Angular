"use strict";
function getItems(items) {
    return new Array().concat(items);
}
let stringArr = ["Ram", "Shyam"];
let numberArr = [1, 2, 3];
let concatResult1 = getItems(stringArr);
let concatResult2 = getItems(numberArr);
console.log(concatResult1);
console.log(concatResult2);
