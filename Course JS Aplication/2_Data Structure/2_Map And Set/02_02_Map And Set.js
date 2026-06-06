/* 1-
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/
let myData = [1, 1, 1, 2, 3];
let myUniqueData = new Set(myData);
console.log(myUniqueData); // Avoid Repetition
console.log(myUniqueData.size); // return Number of Element
console.log(myUniqueData[0]); // Cannot Access Element By Index

// Methods
console.log(myUniqueData.add("hatim")); // add value
myUniqueData.delete("hatim"); // delete value
// console.log(myUniqueData.delete("hatim")): return Boolean value
// myUniqueData.clear(): delet all
console.log(myUniqueData);
console.log(myUniqueData.has(1)); // search if item found or not fouinf

/* 2-
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

console.log("#".repeat(20));
// Type of Data

// set
let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]); // any data Type

// myWeakSet
let myWeakSet = new WeakSet();
let obj = { name: "hatim", age: 18 };
myWeakSet.add(obj); // add
console.log(myWeakSet);
console.log(myWeakSet.has(obj)); // true

// forEach
mySet.forEach((ele) => console.log(ele));

/* 3-
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/
// ⚠️ Hna rkz ktar 3la theorique
let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
    10: "Number",
    10: "String",
};
console.log(myNewObject[10]);

// Kifam kanat keys ki9bla
let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() { }, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);

/* 4-
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let methodeMap = new Map([[10, "number"], ["Name", "String"], [false, "Boolean"]]);

// methodeMap.set(10, "number"); // Set: Add => Keys + Value
// methodeMap.set("Name", "String") // Set: Add => Keys + Value
console.log(methodeMap)
console.log(methodeMap.get(10)); // Access Element
console.log(methodeMap.get("Name")); // Access Element
console.log(methodeMap.get(false)); // Access Element
console.log(methodeMap.delete("Name"))
methodeMap.delete("Name") // remove item
// methodeMap.clear()
console.log(methodeMap.has(false)) // search if item found or not found
console.log(methodeMap)

/* 5-
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

// Map
let mapUser = {theName: "Hatim"};
let myMap1 = new Map() 
myMap1.set(mapUser, "object Value")
mapUser = null // override The references
console.log(myMap1)

// WeakMap
let weakMapUser = { theName: "Hatim" };
let myWeakMap = new WeakMap()
myWeakMap.set(weakMapUser, "object Value")
weakMapUser = null // override The references
console.log(myWeakMap)

/* 6-
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("hatim"))

// regular function
console.log(Array.from("12345", function(e){
    return +e + +e
}))

// Arrow function
console.log(Array.from("12345", e => +e + +e))

// 
let myArray = [1, 1, 1, 2, 3, 4];
let mySet2 = new Set(myArray);
console.log(Array.from(mySet2));
// console.log([...new Set(myArray)]); // Future

// 
function af() {
return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));

/* 7-
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myArr = [10, 20, 30, 40, 50, "A", "B"];
// myArr.copyWithin(3) // [10, 20, 30, 10, 20, 30, 40]
// myArr.copyWithin(4, 6)  // [10, 20, 30, 40, 'B', 'A', 'B']
// myArr.copyWithin(4, -1)  // [10, 20, 30, 40, 'B', 'A', 'B']
// myArr.copyWithin(-6, -2) // [10, 'A', 'B', 40, 50, 'A', 'B']
myArr.copyWithin(1, 5, 6)

console.log(myArr)

/* 8-
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let nums = [1, 2, 3, 4, 5, 6, 7]
let check = nums.some(function(e){
    // console.log("test")
    return e > 5
})
console.log(check)

// Arrow function
let check1 = nums.some((e) => e > 5)
console.log(check1)

// this arguments
let number = 5
let check2 = nums.some(function (e) {
    return e > this
}, number)
console.log(check2)

// Ex 1-
function CheckValue(arr, val){
    return arr.some(function(e){
        return e === val
    })
}
console.log(CheckValue([1, 2, 3, 4, 5, 6, 7], 2))

// Example 2-
let range = {
    min: 10,
    max: 20,
};
let checkNumberInRange = nums.some(function (e) {
    // console.log(this.min);
    // console.log(this.max);
    return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);

/* 9-
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

const Location = {
    20: "place 1",
    30: "place 2",
    10: "place 3",
    40: "place 4",
}

let mainLocation = 15

let checking = Object.keys(Location).every(function(e){
    return +e > this
}, mainLocation)
console.log(checking)

/* 10-
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);

console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects

let objOne = {
    a: 1,
    b: 2,
};
let objTwo = {
    c: 3,
    d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });

// challeng
//  hatim drbozi
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
let result = 0
for(let i = result; i < n1.length; i++){
    result += n1[i]
}
console.log(result * n2[0]/n2[2])
// Needed Output

// elZERo rules
console.log([...n1, ...n2].length*Math.max(...n1))