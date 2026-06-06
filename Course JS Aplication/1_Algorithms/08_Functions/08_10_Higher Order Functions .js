
/* Higher Order Functions - Map */

// Regular Function
let MyNums = [1, 2, 3, 4, 5, 6];
let NewArray = [];
for(let i = 0; i<MyNums.length; i++){
    NewArray.push(MyNums[i] * 2)
}
console.log(NewArray)

// Higher Order Functions - Map(Anonymous Function)
// map كتدور على كل عنصر فـ array
// element = العنصر الحالي
// index = رقم العنصر
// array = الarray كاملة
let AddSelf = MyNums.map(function (element, index, array) {
    // كنضرب كل عنصر ف 2
    return element * 2
}, 10)
console.log(AddSelf)

// Higher Order Functions - Map(Arrow Function)
// نفس الفكرة ولكن باستعمال Arrow Function
let AddSelf1 = MyNums.map((element) => element * 2)
console.log(AddSelf1)


// Higher Order Functions - Map(Regular Function)
// Function عادية
function addition(ele) {
    // كنرجع العنصر مضروب ف 2
    return ele * 2
}

// map كتنفذ function على كل عنصر
let add = MyNums.map(addition)
console.log(add)

/* Higher Order Functions - Map Practice */

// 1-
let SwappingCases = `elZERo`
let Sw = SwappingCases.split(``).map(function(ele){
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
}).join(``)

console.log(Sw)

// 2-
let InvertNumbers = [1, -10, -20, 15, 100, -30];
let Invert = InvertNumbers.map(function(ele){
    // return ele < 0 ? Math.abs(ele) : ele;
    return -ele
})
console.log(Invert)

// 3-
let ignoreNumbers = "Elz123er4o"
let ignore = ignoreNumbers.split("").map(function(ele){
    return isNaN(parseInt(ele))? ele : "";
}).join(``)
console.log(ignore)

/*  Higher Order Functions - Filter */

let Friends = [`Israe`, `Ahmed`, `Sameh`, `Sayeed`, `Asmaa`, `Amgad`]
let FilterFriend = Friends.filter(function(el){
    return el.startsWith(`A`) ? true : false;
})
console.log(FilterFriend)

// 

let Numbers = [11, 20, 2, 5, 17, 10]
// filter تقوم بإنشاء مصفوفة جديدة تحتوي فقط على الأعداد الزوجية
let EvenNumber = Numbers.filter(function (ele) {
    // ele يمثل كل عنصر في المصفوفة
    // الشرط: نتحقق هل العدد زوجي (باقي القسمة على 2 يساوي 0)
    return ele % 2 === 0

})
// طباعة النتيجة في console
console.log(EvenNumber)

/* Higher Order Functions - Filter Practice */

let sentces = `I Love Foood Code To Playing Much `
let filter = sentces.split(" ").filter(function(ele){
    return ele.length <= 4;
}).join(` `)
console.log(filter)
// 2-
let ignoreNumbers1 = "Elz123er4o"
let ignore1 = ignoreNumbers1.split("").filter(function (ele) {
    return isNaN(parseInt(ele));
}).join(``)
console.log(ignore1)

// 3-
let Mix ="A13BS2ZX"
let result = 1;
let Mixs = Mix.split("").filter(function(ele){
    return !isNaN(parseInt(ele));
}).map(function(ele){
    return ele * ele
}).join(``)
console.log(Mixs)

/*  Higher Order Functions - Reduce */

let nums = [10, 20, 15, 30];

let add1 = nums.reduce(function(acc, current, index, arr){
    console.log(`acc ${acc}`)
    console.log(`curr${current}`)
    console.log(`index ${index}`)
    console.log(`arr ${arr}`)
    console.log(acc + current)
    console.log(`#######`)
    return acc + current
},5);

console.log(add1)

/*  Higher Order Functions - Reduce Practice */

let theBiggest = [`Bla`, `Propaganda`, `other`, `AAA`, `Battery`, `Test`, `Propaganda__hihiha`];

let checke = theBiggest.reduce(function (acc, current) {
    console.log(`acc ${acc}`)
    console.log(`curr${current}`)
    console.log(`#######`)
    return acc.length > current.length ? acc : current
});
console.log(checke)

let RemoveChars = [`E`, `@`, `@`, `L`, `Z`, `@`, `@`, `E`, `R`, `@`, `O`];

let FinalString = RemoveChars.filter(function(ele){
    return !ele.startsWith(`@`)
}).reduce(function(acc, curr){
    return acc + curr
})
console.log(FinalString)

let numbers = [1, 2, 3, 4]
// reduce كتجمع كل العناصر في قيمة واحدة
let sum = numbers.reduce(function (acc, element) {

    // acc = المجموع الحالي
    // element = العنصر الحالي في المصفوفة
    return acc + element
}, 0) // البداية من 0
console.log(sum) // طباعة النتيجة

/* Higher Order Functions - ForEach And Practice */

let nums = [5, 10, 15]
// forEach كتدور على كل عنصر فـ array
nums.forEach(function (element, index, array) {
    // element = القيمة ديال العنصر الحالي
    console.log("value:", element)
    // index = رقم العنصر
    console.log("index:", index)
    // array = الarray كاملة
    console.log("array:", array)
})

let array = [10, 20, 30]
array.forEach(function(ele){
    console.log(ele)
})