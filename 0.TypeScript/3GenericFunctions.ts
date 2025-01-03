function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let stringArr: string[] = ["Ram", "Shyam"];
let numberArr: number[] = [1, 2, 3];
let concatResult1 = getItems(stringArr);
let concatResult2 = getItems(numberArr);

console.log(concatResult1);
console.log(concatResult2);
