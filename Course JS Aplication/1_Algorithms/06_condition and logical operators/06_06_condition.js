/* 
if 
else if
else
*/

let price = 100; // السعر الأصلي
let discount = false; // هل يوجد تخفيض
let Amountdiscount = 30; // قيمة التخفيض
let country = `KSA`; // الدولة

// إذا كان هناك تخفيض (true)
if (discount === true) {
  price -= Amountdiscount; // طرح قيمة التخفيض من السعر

  // إذا لم يوجد تخفيض، نتحقق من الدولة
} else if (country === `Morocco`) {
  price -= 50; // إذا كانت المغرب نطرح 50

} else if (country === `syria`) {
  price -= 90; // إذا كانت سوريا نطرح 90

  // إذا لم يتحقق أي شرط
} else {
  price -= 95; // نطرح 95 كخيار افتراضي
}

// عرض السعر النهائي
console.log(price); // النتيجة: 5

/* Nested If Condition */

let price1 = 100; // السعر الأصلي
let discount1 = false; // هل يوجد تخفيض عام
let Amountdiscount1 = 30; // قيمة التخفيض
let country1 = `Morocco`; // الدولة
let student = true; // هل الشخص طالب

// إذا كان هناك تخفيض عام
if (discount1 === true) {
  price1 -= Amountdiscount1; // نطرح قيمة التخفيض

  // إذا لم يوجد تخفيض عام، نتحقق من الدولة
} else if (country1 === `Morocco`) {

  // شرط متداخل (Nested If)
  // إذا كان الشخص طالب
  if (student === true) {
    price1 -= Amountdiscount1 + 40; // تخفيض كبير (30 + 40)

  } else {
    // إذا لم يكن طالب
    price1 -= Amountdiscount1 + 10; // تخفيض أقل (30 + 10)
  }

  // إذا لم تتحقق أي حالة
} else {
  price1 -= 95; // تخفيض افتراضي
}

// عرض النتيجة النهائية
console.log(price1); // النتيجة: 30

/* Conditional Ternary Operator */

// let theName = `Ahmed`;
// let theGender = `Male`;
// let theAge = 30;

// if (theGender == `Male`) {
//   console.log("Mr");
// }

// else {
//   console.log("Mrs");
// }

// Conditional Ternary Operator
// الشكل: condition ? value_if_true : value_if_false

let theName = `Ahmed`; // الاسم
let theGender = `Male`; // الجنس
let theAge = 30; // العمر

// إذا كان الجنس Male نطبع "Mr" وإلا "Mrs"
theGender == `Male` ? console.log("Mr") : console.log("Mrs");

// الطريقة 1: تخزين النتيجة في متغير ثم عرضها
var Result = theGender == `Male` ? "Mr" : "Mrs";
document.writeln(Result);

// الطريقة 2: نفس الفكرة (تكرار نفس الحل)
var Result = theGender == `Male` ? "Mr" : "Mrs";
document.writeln(Result);

// الطريقة 3: طباعة مباشرة بدون متغير
console.log(theGender == `Male` ? "Mr" : "Mrs");

// الطريقة 4: استعمال التيرنري داخل النص (Template String)
console.log(`hello ${theGender == `Male` ? "Mr" : "Mrs"} ${theName}`);

// الطريقة 5: (Nested Ternary) شروط متعددة حسب العمر
theAge < 20
  ? console.log("Less than 20")
  : theAge > 20 && theAge < 60
    ? console.log("20 to 60")
    : theAge > 60
      ? console.log("Larger than 60")
      : console.log("Unknown");

/* CNullish Coalescing Operator And Logical Or */

console.log(Boolean(100))
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let money = 0;

// || (Logical OR)
// كيرجع أول قيمة truthy
// وكيعتبر: 0, "", false, null, undefined = false
console.log(`The price is ${money || 1000}`);
// النتيجة: 1000 لأن 0 تعتبر false

// ?? (Nullish Coalescing)
// كيتجاهل غير null و undefined
// وكيقبل 0 و "" و false كقيم عادية
console.log(`The price is ${money ?? 1000}`);
// النتيجة: 0 لأن money = 0 (ليست null ولا undefined)

/* Challenge*/

// 1-

let a= 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
}
else{
  console.log("error")
}

// Condition Ternary

a < 10
?console.log(10)
:a >= 10 && a <= 40
?console.log("10 To 40")
:a > 40
?console.log("> 40")
:console.log("error")

// 2-

let st = "Elzero Web School";

if (`${(st.length*2.).toString()}` === "34") {
  console.log("Good");
}

// 3-

// statique
if ( st.slice(7,8) === "W") {
  console.log("Good");
}

// dynamic
if (st[st.indexOf("W")].toLowerCase() === "W") {
  console.log("Good");
}

// 4-
if ( `${st}`!== "string") {
  console.log("Good");
}

// or
if ("" !== "string") {
  console.log("Good");
}

// 5-
if (typeof (st.length) === "number") {
  console.log("Good");
}


if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}


