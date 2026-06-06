/* Number */

// 1- Number

console.log(1000000)

// syntatic sugar
console.log(1_000_000);
console.log(1e6)
console.log(10**6)


console.log(Number.MAX_SAFE_INTEGER) // numbers sfae
console.log(Number.MAX_VALUE) // the last number in js

// 2- Number Methode

// toString()
// تعريف: تحويل الرقم إلى نص (String)
console.log((100).toString()) // "100"

// toFixed()
// تعريف: تحديد عدد الأرقام بعد الفاصلة مع التقريب
console.log(100.666666)
console.log(10.6666666.toFixed(2)) // "10.67"

// parseFloat()
// تعريف: تحويل النص إلى عدد عشري (Float)
console.log(parseFloat("67.8989")) // 67.8989

// parseInt()
// تعريف: تحويل النص أو الرقم إلى عدد صحيح (Integer)
console.log(parseInt(76.09090)) // 76

// Number.isInteger()
// تعريف: التحقق هل القيمة عدد صحيح (بدون فاصلة)
console.log(Number.isInteger(66)) // true
console.log(Number.isInteger("66")) // false

// Number.isNaN()
// تعريف: التحقق هل القيمة هي NaN (Not a Number)
console.log(Number.isNaN(66)) // false
console.log(Number.isNaN("66")) // false
console.log(Number.isNaN("ha" / 90)) // true

// 3- Math object

// Math.round() -> كيقرب الرقم لأقرب عدد صحيح
console.log(Math.round(99.2)); // 99
console.log(Math.round(99.7)); // 100

// Math.ceil() -> كيرفع الرقم دائماً للعدد الصحيح اللي فوق
console.log(Math.ceil(99.1)); // 100

// Math.floor() -> كينقص الكسر وكيهبط دائماً
console.log(Math.floor(99.9)); // 99

// Math.min() -> كيرجع أصغر رقم من بين مجموعة أرقام
console.log(Math.min(1090, 70, 80, 10)); // 10

// Math.max() -> كيرجع أكبر رقم من بين مجموعة أرقام
console.log(Math.max(1090, 70, 80, 10)); // 1090

// Math.pow(base, exponent) -> كيرفع الرقم لقوة معينة (power)
console.log(Math.pow(2, 8)); // 256 (2^8)

// Math.random() -> كيعطي رقم عشوائي بين 0 و 1
console.log(Math.random());

// Math.trunc() -> كيشيل الكسر وكيخلي غير الجزء الصحيح (بلا تقريب)
console.log(Math.trunc(45.9)); // 45

// 4-Number Challenge

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// q1 
console.log(Math.round(Math.min(a, b, c, d)));

// q2 no
console.log(a**parseInt(d)) //10000

// q3 

console.log(Math.trunc(d))
console.log(Math.floor(d))
console.log(parseInt(d))
console.log(Math.round(d));

// q4 no

console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 => Number

