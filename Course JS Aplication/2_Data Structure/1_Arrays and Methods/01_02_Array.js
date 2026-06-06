/* Intro Array */

// Simple Array
let Names = [`Hatim`, `Mohamed`, `Morad`];
// مصفوفة تحتوي على 3 أسماء

console.log(`Hello ${Names[0]}`);
// الوصول لأول عنصر في المصفوفة (Hatim)
// النتيجة: Hello Hatim


console.log(`${Names[1][1]}`.toUpperCase());
// Names[1] = "Mohamed"
// Names[1][1] = الحرف الثاني → "o"
// toUpperCase() = تحويله إلى حرف كبير → "O"
// النتيجة: O


Names[0] = `gamal`;
// تغيير أول عنصر في المصفوفة من Hatim إلى gamal

console.log(Names);
// طباعة المصفوفة بعد التغيير
// النتيجة: ["gamal", "Mohamed", "Morad"]

// Nested Array

let friendes = [`Hatim`, `Mohamed`, `Morad`, [`Israe`, `Hanae`, `Bouchra`]];
// مصفوفة تحتوي على 3 عناصر + مصفوفة داخلية

console.log(`Hello ${friendes[3][0]}`);
// friendes[3] = ["Israe", "Hanae", "Bouchra"]
// friendes[3][0] = "Israe"
// النتيجة: Hello Israe


console.log(`${friendes[3][0][0]}`.toUpperCase());
// friendes[3][0] = "Israe"
// friendes[3][0][0] = أول حرف → "I"
// toUpperCase() = تحويله إلى حرف كبير
// النتيجة: I

// Edit of array

friendes[0] = `gamal`; // Simple Array
console.log(friendes);

friendes[3] = /* `Israe` OR */[`abdo`, `Zaka`]; // Nested Array
console.log(friendes);

// Add info

console.log(Array.isArray(Names)); // for check this is array

/* Using Length With Array */

// Index يبدأ من 0 → [0, 1, 2, 3]
// Length هو عدد العناصر → [1, 2, 3, 4]

let fruite = [`banan`, `apple`, `orange`, `dragon`];
// مصفوفة فيها 4 عناصر

console.log(fruite.length);
// النتيجة: 4 (عدد العناصر)

// إضافة عنصر في index بعيد
fruite[7] = `manga`;
// هنا أضفنا عنصر في index = 7
// index 4 و 5 و 6 سيكونوا empty (undefined)

console.log(fruite);
// النتيجة:
// ["banan", "apple", "orange", "dragon", empty × 3, "manga"]

console.log(fruite.length);
// النتيجة: 8
// لأن آخر index هو 7 → length = 8

// Manipulation method length
let Vegtebal = [`potato`, `tomato`, `onion`, `pepper`];
// Vegtebal[Vegtebal.length] = `rimoulacha`; // add in the last array
Vegtebal[Vegtebal.length - 1] = `rimoulacha`; // compensation rimoulacha = pepper
console.log(Vegtebal);

// accses one items in array
Vegtebal.length = 1;

console.log(Vegtebal);

/* Add And Remove From Array */
let cars = [`lambo`, ` ferarai`, "toyota", `pegeute`];
console.log(cars);

cars.unshift(`hyundai`); // add item in start array
console.log(cars);

cars.push(`KIA`); // add item in end array
console.log(cars);

cars.shift(); // Remove item in start array
console.log(cars);

cars.pop(); // Remove item in end array
console.log(cars);

let last = cars.pop();
console.log(`this cars ${last}`);

let laptop = [`Asus`, `gigabayte`, `Hp`, `Dell`];
console.log(laptop);

// indexOf:
// تبحث عن عنصر داخل المصفوفة من اليسار إلى اليمين
// ترجع index (الموقع) إذا وجدته، وإذا لم يوجد ترجع -1
// يمكن تحديد من أين يبدأ البحث (index)
console.log(laptop.indexOf(`Dell`, 1));
// يبدأ من index = 1
// النتيجة: 3

// lastIndexOf:
// تبحث عن العنصر من اليمين إلى اليسار
// ترجع آخر موقع (index) للعنصر
// يمكن أيضاً تحديد نقطة البداية
console.log(laptop.lastIndexOf(`Dell`));
// النتيجة: 3

console.log(laptop.lastIndexOf(`gigabayte`, -2));
// -2 يعني يبدأ من قبل آخر عنصر بمقدارين
// يبحث من اليمين إلى اليسار

// includes:
// تتحقق هل العنصر موجود أم لا
// ترجع true إذا وجد، و false إذا لم يوجد
// يمكن تحديد من أين يبدأ البحث
console.log(laptop.includes(`Dell`)); // true
console.log(laptop.includes(`Dell`, 1));
// يبدأ البحث من index = 1

// إذا لم يوجد العنصر:
// indexOf و lastIndexOf يرجعان -1
// includes ترجع false

// Add info

// value if searching in array which does not exist, donne => -1

/* Sorting Arrays */

let random = [10, `ahmed`, `fatih`, `100`, 90, 45, `10000`, -2929];
console.log(random);
// طباعة المصفوفة كما هي

// sort():
// تقوم بترتيب عناصر المصفوفة
// ⚠️ لكن الترتيب يكون كنصوص (string) وليس كأرقام
// يعني تعتمد على الترتيب الأبجدي (ASCII)
console.log(random.sort());
// مثال: "100" تأتي قبل "2" لأن المقارنة تكون حرفية

// reverse():
// تقوم بعكس ترتيب العناصر في المصفوفة
// غالباً تُستعمل بعد sort للحصول على ترتيب تنازلي
console.log(random.reverse()); 

/* Slicing Array */
let teachers = [`Imad`, `Hatim`, `Zakaria`, `abo`, `youssef`, `l7aj`];
console.log(teachers);

// slice:
// تُستخدم لنسخ جزء من المصفوفة بدون تغيير المصفوفة الأصلية
// Positive Number
console.log(teachers.slice(1));
// يبدأ من index 1 إلى النهاية

console.log(teachers.slice(1, 3));
// يبدأ من 1 ويتوقف قبل 3
// يعني يأخذ index 1 و 2 فقط

// Negative Number
console.log(teachers.slice(-3));
// يأخذ آخر 3 عناصر

console.log(teachers.slice(1, -3));
// يبدأ من index 1 ويتوقف قبل آخر 3 عناصر

// splice:
// تُستخدم لحذف أو إضافة عناصر داخل المصفوفة (تُغيّر الأصل)

console.log(teachers.splice(0, 4, `issam`, `fatih`));
// يبدأ من index 0
// يحذف 4 عناصر
// ثم يضيف "issam" و "fatih"
// ترجع العناصر التي تم حذفها


/* Joining and concat Arrays*/

// concat:
// تُستخدم لدمج عدة مصفوفات معاً في مصفوفة جديدة
// لا تُغيّر المصفوفة الأصلية
let myfriend = [`Zoubir`, `Hamza`, `Annas`, `Adam`, `fatih`, `abo ri7`];
let myNewFriend = ["Saad", `Haytam`];
let mySchoolFriend = ["reda", `Alae`];

let AllMyfriend = myfriend.concat(
  myNewFriend,
  mySchoolFriend,
  `Israe`,
  [`Bouchra`, `Hanae`]
);
console.log(AllMyfriend);

// join:
// تُستخدم لتحويل المصفوفة إلى نص (string)
// مع وضع فاصل بين العناصر
console.log(AllMyfriend.join(`;`));
// هنا الفاصل هو ;

/* Array Challenge */

let zero = 0;
let counter = 3;
let my = [`Ahmed`, `Mazero`, `Elham`, `Osama`, `Gamal`, `Ameer`];

// 1-
console.log(my.slice(zero, ++counter).reverse());

// 2-
console.log(my.slice(++zero, --counter).reverse());

// 3-
// console.log(my[1].slice(4, 5) + my[1].slice(5).toUpperCase()); //rO
console.log(
  my[zero].slice(++counter, ++counter) +
  my[zero].slice(counter).toUpperCase()); //rO

//  4-

