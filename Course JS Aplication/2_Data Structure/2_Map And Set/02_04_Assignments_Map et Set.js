
// 1-
let setOfNumbers = new Set([10])
setOfNumbers.add(20)
setOfNumbers.add(setOfNumbers.size)
console.log(setOfNumbers)
console.log(Array.from(setOfNumbers)[2])

// 2-
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends.sort()))

// 3-
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt"
};
let myMap = new Map(Object.entries(myInfo))
console.log(myMap.size)
console.log(myMap.has("role"))

// 4- Ai
let theNumber = 100020003000;
let result = [...theNumber.toString()].filter(char => char != false).join("");
console.log(result);

// 5-
let theName = "Elzero";
console.log(theName.split(""))
console.log(Array.from(theName))
console.log([...theName])
console.log(Array(...theName));
console.log(Object.assign([], theName));

// 6-
// 6-1
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let newChars = [...chars.filter(x => typeof x === "number"), ...chars.filter(x=> typeof x === "string")];
// newChars.push(...chars.slice(5))
// newChars.push(...chars.slice(0, 5))
console.log(newChars.copyWithin(0, 3, 6))

// 6-2
let chars1 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let newchars1 = [
    ...chars1.filter(x => typeof x === "number"),
    ...chars1.filter(x => typeof x === "string")
];
console.log(newchars1.copyWithin(0, 4, 8));

let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
let newChar3 = [...chars3.filter(x => typeof x === "number"), ...chars3.filter(x => typeof x === "string") ]
console.log(newChar3.copyWithin(0, 2, 4))


// 7-
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne, ...numsTwo])
console.log(numsOne.concat(numsTwo))
numsOne.push(...numsTwo)
console.log(numsOne)

// 8-
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log([...n1, ...n2].length * Math.max(...n1))
