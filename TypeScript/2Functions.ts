// Defining function

function add(num1: number, num2:number): number {
    return num1 + num2;
}

console.log(add(2, 3));

const sub = (num1: number, num2: number): number => {
    return num1 - num2;
};

console.log(sub(3, 4));

const mult = function(num1: number, num2:number): number {
    return num1 * num2;
}

// Optional Parameters
const add1 = (num1: number, num2: number, num3?: number): number => {
    return num3 ? num1 + num2 + num3: num1 + num2;
}

console.log(add1(3, 4));
console.log(add1(4, 5, 6));

// Default Parameters
const sub2 = (num1: number, num2: number, num3: number = 4): number => {
    return num1 - num2 - num3;
}


// Rest Parameters
const sum = (...args: number[]): number => {
    let sum: number = 0;
    for (let x of args) {
        sum += x;
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));