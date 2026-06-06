// Ex1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10**5); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(+`100000`); // 100000
console.log(5e4*2); // 100000
console.log(parseInt(100000.9999)); // 100000
console.log(Math.round(100000.2)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Number(`100000`)); // 100000
console.log(Math.max(100000, 50, 90000)); // 100000
console.log(Math.min(100000, 20000000, 80000000)); // 100000

// Ex2

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// Ex3 NO

console.log(Number.MAX_SAFE_INTEGER.toString().length);

// Ex4

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// Ex5 NO

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// Ex6

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(+(10.4).toFixed(0)); // 10
console.log(Math.trunc(flt)); // 10

// Ex7 NO

console.log(Math.trunc(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
