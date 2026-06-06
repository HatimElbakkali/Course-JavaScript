/* Anonymous Function And Practice */

// console.log(Add(20, 30)) // ymkn ttba3 l9ima 9bl instruction
function Add(num1, num2){
    return num1 + num2
}
console.log(Add(20, 30))

// Anonymous Function: function bla name, 3lach 7it ba3d sa3at kan7tajo chi function nst5dmoha one.
let calc = function (num1, num2) {
    // Anonymous Function (دالة بدون اسم)
    // num1 و num2 = parameters

    return num1 + num2;
    // ترجع مجموع الرقمين
};

// استدعاء الدالة مع تمرير قيم (arguments)
console.log(calc(20, 30));

// النتيجة: 50

// EX Anonymous Function
document.getElementById("Show").onclick = function(){
    console.log("Hello hatim")
}
// setTimeout( function(){
//     console.log(`bataa`)
// },2000)


/* Return Nested Function: kan7tajoha ila kan 3ana function kbira */

// EXample 1
function SayMsg(Fname, Lname){
    let msg = `Hello`
    function conct(){
        msg = `${msg} ${Fname} ${Lname}`
    }
    conct();
    return msg;
}
console.log(SayMsg(`Hatim`, `Elbakkali`))

// EXample 2
function SayMsg(Fname, Lname) {
    let msg = `Hello`
    function conct() {
       return `${msg} ${Fname} ${Lname}`
    }
    return conct();
}
console.log(SayMsg(`Hatim`, `Elbakkali`))

// EXample 3

function SayMsg(Fname, Lname) {
    let msg = `Hello`
    function conct() {
        function getFullName(){
            return `${Fname} ${Lname}`
        }
        return `${msg} ${getFullName()}`;
    }
    return conct();
}
console.log(SayMsg(`Hatim`, `Elbakkali`))

/* صيغة Arrow Function:
   إذا كان لديك تعبير واحد (سطر واحد) يمكن اختصار الكود
*/

let print = num => num;
// num = معامل (parameter)
// إذا كان لديك معامل واحد يمكن حذف الأقواس ()
// ويتم إرجاع القيمة مباشرة بدون استخدام return

console.log(print(100));
// النتيجة: 100


let Addnum = (num, num2) => num + num2;
// هنا لدينا أكثر من معامل
// لذلك يجب استعمال الأقواس ()
// ويتم إرجاع نتيجة الجمع مباشرة (return ضمني)

console.log(Addnum(100, 50));
// النتيجة: 150

/* Scope - Global And Local Scope */

var a = 1;
let b = 2;

function ShowText(){
    var a = 10;
    let b = 20;
    console.log(`Function - From Local ${a}`)
    console.log(`Function - From Local ${b}`)
    
}
ShowText()

console.log(`From Global ${a}`)
console.log(`From Global ${b}`)

/* Scope - Scope – Block[If, Switch, loop](let and const only;) */

let x = 10;
if(10 === 10){
    let x = 50;
    // console.log(x)
}
console.log(x)

var x1 = 10;
if (10 === 10) {
    var x1 = 50;
}
console.log(x1)

/* Scope – Lexical (Static) */

function parent(){

    let a = 99;
    function child(){
        // let a = 98;
        console.log(a)
        // console.log(`from child ${b}`) 
        function grand(){
            let b = 100
            console.log(`from grand ${a}`)
            console.log(`from grand ${b}`)

        }
        grand()
    }
    child();
}
parent()

/* Challenge */

// 1-

// Anonymous function
let names = function(...names){
    return `String [${names.join(`], [`)}] => Done !`
};
console.log(names(`Osama`, `Mohamed`, `Ali`, `Ibrahim` ))

// Arrow function
let Fname = (...Fnames) =>  console.log( `String [${Fnames.join(`], [`)}] => Done !`)
Fname(`Osama`, `Mohamed`, `Ali`, `Ibrahim`)

// 2-

// Anonymous function
let myNumbers = [20, 50, 10, 60];
let calc1 = (one, two, ...nums) => one + two + parseInt(nums);
console.log(calc1(10, myNumbers[0], myNumbers[1]))

// Simple or regular function

function calc2(one, two, ...nums){
    return one + two + parseInt(nums)
}
console.log(calc1(10, myNumbers[0], myNumbers[1]))
