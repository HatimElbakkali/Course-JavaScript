
/* 1- */

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(-false, num)); // ["Ahmed", "Elham", "Osama"];
// Method 2
console.log(myFriends.splice(-false, num)); // ["Ahmed", "Elham", "Osama"];

/* 2- */
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.pop()
friends.shift()
console.log(friends); // ["Eman", "Osama"]


/* 3- */

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(); // ["Z", "X", "D", "C", "B", "A"]
