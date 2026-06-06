
// 1-
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"]; // Elzero
let mixs = mix.map(function(ele){
    return typeof ele == "number"? "": ele ;
}).reduce(function(acc, curr){
    return acc + curr
})
console.log( mixs)

// 2-
let myString = "EElllzzzzzzzeroo";  // Elzero
let myStrings = myString.split("").filter(function(ele, index, arr){
    return ele !== arr[index - 1]
}).join("")
console.log(myStrings)

// 3-
let myArray = ["E", "l", "z", ["e", "r"], "o"];// Elzero
let myArrays = myArray.reduce(function(acc, curr){
    return acc + curr;
}).replace(",", "")
console.log(myArrays)

// 4-
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"]; // [-1, -10, 10, 20, -5, -3]
let Filtering = numsAndStrings.filter(function(ele){
    return typeof ele == "string" ? "" : ele;
}).map(function(ele){
    return -ele
})
console.log(Filtering)


