/* Comparison Operators */

// == (يساوي) -> يقارن القيمة فقط دون النظر إلى النوع
console.log(10 == "10"); // true

// != (لا يساوي) -> يتحقق هل القيم غير متساوية (من حيث القيمة فقط)
console.log(10 != "10"); // false

// === (يساوي تماماً) -> يقارن القيمة والنوع معاً
console.log(10 === "10"); // false

// !== (لا يساوي تماماً) -> يتحقق هل القيم أو الأنواع مختلفة
console.log(10 !== "10"); // true

// > (أكبر من)
console.log(20 > 10); // true

// >= (أكبر من أو يساوي)
console.log(20 >= 20); // true

// < (أصغر من)
console.log(20 < 40); // true

// <= (أصغر من أو يساوي)
console.log(40 <= 40); // true

// Example
// typeof -> تُرجع نوع البيانات
// هنا نقارن نوع سلسلتين نصيتين
console.log(typeof "hatim" === typeof "morad"); // true

/* Logical Operators */

// ! (NOT) -> يُستخدم لعكس النتيجة (true تصبح false والعكس)
console.log(!true); // false

// هنا: (10 === "10") = false، وعند استعمال ! تصبح true
console.log(!(10 === "10")); // true

// && (AND) -> تُرجع true فقط إذا كان الشرطان صحيحين
// 10 == "10" → true (نفس القيمة)
// 10 === "10" → false (اختلاف النوع)
console.log(10 == "10" && 10 === "10"); // false

// || (OR) -> تُرجع true إذا كان شرط واحد على الأقل صحيح
// الشرط الأول true، لذلك النتيجة true
console.log(10 == "10" || 10 === "10"); // true



