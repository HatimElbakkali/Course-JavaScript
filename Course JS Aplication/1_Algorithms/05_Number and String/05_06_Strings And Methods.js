/* string and method part1  */

// var the_name = ` hatim `;
// console.log(the_name[2]);
// or methode

let the_name = "  Elzero  ";

// charAt() -> كيعطيك الحرف فـ position معين
console.log(the_name.charAt(2));

// length -> كيرجع عدد الحروف (length ديال النص)
console.log(the_name.length);

// trim() -> كيشيل المسافات من البداية والنهاية
console.log(the_name.trim());

// toUpperCase() -> كيقلب جميع الحروف لكبار
console.log(the_name.toUpperCase().trim());

// toLowerCase() -> كيقلب جميع الحروف لصغار
console.log(the_name.toLowerCase().trim());

// chaining methods -> كنجمعو أكثر من method مع بعض
console.log(the_name.trim().toUpperCase().charAt(2));



let a = `Elzero Web School`;

/*
indexOf()
➡️ تبحث عن أول ظهور للنص داخل السلسلة
➡️ تُرجع موقعه (index)
➡️ تعتمد على index
*/
console.log(a.indexOf(`Web`));  // 7

/*
lastIndexOf()
➡️ تبحث عن آخر ظهور للنص داخل السلسلة
➡️ تُرجع آخر موقع (index)
➡️ تعتمد على index
*/
console.log(a.lastIndexOf(`Web`));  // 7
console.log(a.lastIndexOf(`o`)); // 15

/*
slice(start, end)
➡️ تقطع جزءًا من النص
➡️ تعتمد على index
➡️ end غير مشمولة
➡️ تدعم القيم السالبة (من النهاية)
*/
console.log(a.slice(7)); // Web School
console.log(a.slice(7, 10)); // Web
console.log(a.slice(-7, -10)); // ""

/*
repeat()
➡️ تكرر النص عددًا معينًا من المرات
➡️ لا تعتمد على index أو length
*/
console.log(a.repeat(10)); // Elzero....(10 مرات)

/*
split()
➡️ تقسّم النص إلى مصفوفة
➡️ حسب فاصل معين (separator)
➡️ لا تعتمد على index أو length
*/
console.log(a.split(` `)); // ["Elzero", "Web", "School"]

/*
substring(start, end)
➡️ تقطع جزءًا من النص
➡️ تعتمد على index
➡️ لا تدعم القيم السالبة (تتحول إلى 0)
➡️ إذا كان start أكبر من end يتم تبديلهما
*/
console.log(a.substring(2, 8)); // zero W
console.log(a.substring(8, 2)); // zero W
console.log(a.substring(-10, 7));  // Elzero

/*
substring مع length
➡️ يتم استخدام length لتحديد المواقع داخل النص
➡️ دمج بين length و index
*/
console.log(a.substring(a.length - 5, a.length - 3));  // ho

/*
includes()
➡️ تتحقق من وجود نص داخل السلسلة
➡️ تُرجع true أو false
➡️ تعتمد على البحث (index داخليًا)
*/
console.log(a.includes(`elzero`)); // false
console.log(a.includes(`Elzero`)); // true

/*
startsWith()
➡️ تتحقق هل النص يبدأ بقيمة معينة
➡️ تعتمد على index
*/
console.log(a.startsWith(`E`)); // true
console.log(a.startsWith(`E`, 2)); // false

/*
endsWith()
➡️ تتحقق هل النص ينتهي بقيمة معينة
➡️ تعتمد على length
➡️ يمكن تحديد طول الفحص
*/
console.log(a.endsWith(`l`)); // true
console.log(a.endsWith(`l`, a.length)); // true

/* chalenge */

// chalenge 1

let b = `Elzero Web School`; // Zero
console.log(b.slice(2, 7).toUpperCase());

// chalenge 2

console.log(`h`.repeat(8).toUpperCase());

// chalenge 3

console.log(a[0].toLowerCase() + a.slice(1, -1).toUpperCase() + a.slice(-1).toLowerCase(),);
