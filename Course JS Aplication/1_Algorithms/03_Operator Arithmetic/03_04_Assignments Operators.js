// EX1

// Replace ? With Arithmetic Operators
// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0


// EX2

let a = 3;

// Solution One
console.log(a*--a); // 6

// Solution Two
console.log(a*++a); // 6

// Soultion Three
console.log(a+a); // 6

// Soultion Four
console.log(a + --a +true); // 6

// Solution Five
console.log(a*a+ +true +true); // 6

// Solution Six
console.log(++a+ a); // 6

let b = 3;
let c = 3;
let d = 3;
let e = 3;
let f = 3;
let g = 3;

// Solution One
console.log(b+b); // 6

// Solution Two
console.log(c * --c); // 6

// Soultion Three
console.log(d*d - +true *d); // 6

// Soultion Four
console.log(e - +true + e +true); // 6

// Solution Five
console.log(++f + +true + +true); // 6

// Solution Six
console.log(g/g *g*--g); // 6

// EX3

let h = "10";

// Solution One
console.log(+h + +h); // 20

// Solution Two
console.log(++h + --h - +true); // 20

// Solution Three
console.log(--h+h +true +true); // 20

// Solution Four
console.log(++h+ ++h - +true); // 20

// EX4

let points = 10;

// Write Your Code Here

console.log(++points - -true +true); // 13

// Write Your Code Here

console.log(--points - +true -true); // 8;