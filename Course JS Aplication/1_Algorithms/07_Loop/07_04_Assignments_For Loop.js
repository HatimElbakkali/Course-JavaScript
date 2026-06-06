// EX1

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (i = start; i < end + start; i += start) {
//   if (i == exclude) {
//     continue;
//   }
//   console.log(i);
// }

// EX2

// let start1 = 10;
// let end1 = 0;
// let stop1 = 3;

// for (i = start1; end1 < i ; i-- ) {
//   if (i == stop1) {
//     break;
//   }
//   console.log(i);
// }

// EX3

// let start2 = 1;
// let end2 = 6;
// let breaker = 2;

// // Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// EX4 Claude

// let index = 10;
// let jump = 2;
// for (;;) {
//   if (index < jump) break;
//   console.log(index);
//   index -= jump;
// }

// EX5

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = friends.length / friends.length;


console.log()
for (let i = friends.length - friends.length; i < friends.length; i++) {
    if (friends[i][friends.length - friends.length].toLowerCase() === letter) {
        continue;
    }
    console.log(`${counter} => ${friends[i]}`);
    counter++;

}

// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");