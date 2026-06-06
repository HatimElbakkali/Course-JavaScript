

// 1-

function sayHello(theName, theGender) {
    // if (theGender == "Male"){
    //     console.log(`Hello Mr ${theName}`)
    // }
    // else if (theGender == "Female"){
    //     console.log(`Hello Miss ${theName}`)
    // }
    // else{
    //     console.log(`Hello ${theName}`)
    // }
    theGender == "Male" ? console.log(`Hello Mr ${theName}`)
    :theGender == "Female" ? console.log(`Hello Miss ${theName}`)
    :console.log(`Hello ${theName}`);

}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// 2-
console.log(`#########`)
function calculate(firstNum, secondNum, operation) {
    if(secondNum== undefined){
        console.log(`Second Number Not Found`)
    }
    else if (firstNum != undefined && secondNum != undefined && operation == undefined){ 
        console.log(firstNum + secondNum )
    }

    else if (firstNum != undefined && secondNum != undefined && operation == 'add') {
        console.log(firstNum + secondNum)
    }
    else if (firstNum != undefined && secondNum != undefined && operation == 'subtract') {
        console.log(firstNum - secondNum)
    }

    else if (firstNum != undefined && secondNum != undefined && operation == 'multiply') {
        console.log(firstNum * secondNum)
    }
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

// 3-'

console.log(`#########`)
function ageInTime(theAge) {
    if(theAge > 100 || theAge < 10){
        console.log(`${theAge} Age Out Of Range`)
    }

    if (theAge > 10 && theAge < 100) {
        let hour = 365 * 24
        let minute = hour * 60
        let Second = minute * 60
        console.log(`your age months ${theAge * 12} and Week ${theAge * 7} and days ${theAge * 365} and hour ${theAge * hour} and minute ${theAge * minute} and Second ${Second} `)
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// 4-

function ShowDetails(a, b, c) {
    info = [a, b, c]
    for (let i = 0; i < info.length; i++) {
        typeof info[i] === "string" ? (a = info[i])
            : typeof info[i] === "number" ? (b = info[i])
                : typeof info[i] === "boolean" ? (c = info[i] ? "you are Available for Hire" : "you are Not Available for Hire")
                    : null;
    }
    console.log(`Hello ${a}, Your Age Is ${b}, ${c}`)
}
ShowDetails(`hatim`, 38, true)
ShowDetails(38, `hatim`, true)
ShowDetails(false, 38, `hatim`)
ShowDetails(false, `hatim`, 38)

// 5-

function createSelectBox(startYear, endYear) {
    for(let i = startYear; i < endYear; i++){
        console.log(i)
    }
}
createSelectBox(2000, 2021);

// // 6-
// function multiply(*arg){

// }
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000