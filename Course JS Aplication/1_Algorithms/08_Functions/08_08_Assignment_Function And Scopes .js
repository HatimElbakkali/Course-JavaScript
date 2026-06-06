// 2-
let itsMe = Says => Says ;
    console.log(itsMe(`Iam A Normal Function`));

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// 3-

let checker=(zName) => {
    return (status) => {
        return (salary) => {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        };
    };
}
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// 4-

function specialMix(...data) {
    let result = 0
    let hasNumber = false //
    for(let i =0; i<data.length; i++){
        if (typeof data[i] == "number"){
            result += data[i]
            hasNumber = true
        }
        else if (typeof data[i] == "string"){
            let num = parseInt(data[i])
            if(!isNaN(num)){
                result += num
                hasNumber = true
            }
        }
    }
    return hasNumber ? result : "All is Strings"
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


