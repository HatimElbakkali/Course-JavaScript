/* Object - Introduction */

let user = {
    // Properties OR Attributes (خصائص الكائن)
    // تمثل معلومات عن المستخدم
    theName: "Hatim",   // اسم المستخدم
    theAge: 18,         // عمر المستخدم
    // Method (دالة داخل الكائن)
    // تمثل سلوك أو فعل يقوم به المستخدم
    SayHello: function () {
        return "Hello"  // ترجع جملة ترحيب
    },
};
// Accessing Object (الوصول إلى خصائص ودوال الكائن)
// طباعة اسم المستخدم
console.log(user.theName)
// طباعة عمر المستخدم
console.log(user.theAge)
// استدعاء الدالة داخل الكائن وطباعة نتيجتها
console.log(user.SayHello())

/* Dot Notation VS Bracket Notation */
// Dot Notation VS Bracket Notation

let user = {
    name: "Ali",              // خاصية عادية
    age: 20,                  // خاصية عادية
    "country of": "Egypt",   // خاصية فيها مسافة
    100: "number key"        // مفتاح رقمي
}
/* -----------------------------
   Dot Notation (.)
   -----------------------------
   كنستعملها فقط مع المفاتيح البسيطة
   اللي ما فيهاش مسافات ولا رموز
*/
console.log(user.name)  // كيطبع: Ali
console.log(user.age)   // كيطبع: 20
/* -----------------------------
   Bracket Notation []
   -----------------------------
   كنستعملوها مع:
   - مفاتيح فيها مسافات
   - رموز
   - أرقام
*/
console.log(user["country of"]) // كيطبع: Egypt
console.log(user[100])          // كيطبع: number value

// Dynamic Property Name
let myVar = "country"
let user2 = {
    theName: "Hatim",
    country: "Egypt",
};
// console.log(user2["country of"])
console.log(user2[myVar])

/* Nested Object And Advanced Trainings */

// متغير عام كيمثل واش الشخص متوفر ولا لا
let Availble = true;
let Batata = {
    // اسم الشخص
    name: `hatim`,
    // عمر الشخص
    Age: 18,
    // لائحة المهارات (Array)
    Skills: ["HTML", "CSS", "JS"],
    // خاصية داخل object كتمثل التوفر
    Availble: false,
    // كائن داخل كائن (Nested Object) فيه العناوين
    adresses: {
        KSA: "Riyadh",
        Moroco: {
            one: "Tetouan",
            two: "Tangier",
        },
    },
}
// طباعة اسم الشخص
console.log(Batata.name)
// طباعة المهارات مفصولة بـ "\"
console.log(Batata.Skills.join("\\"))
// طباعة أول مهارة (index 2)
console.log(Batata.Skills[2])
// الوصول لمدينة في السعودية
console.log(Batata.adresses.KSA)
// الوصول لمدينة داخل المغرب
console.log(Batata.adresses.Moroco.one)
// نفس الوصول ولكن بـ Bracket + Dot notation
console.log(Batata["adresses"].Moroco.one)
// الوصول بـ Bracket notation كامل
console.log(Batata["adresses"]["Moroco"]["two"])



/* Create Object With New Keyword */
// let user99 = {}
let user99 = new Object({
    Age: 20,
})
console.log(user99)
user99.Name = "Israe"; // Dot Notation
user99["Age"] = 9; // Bracket Notation
user99.SayHello = function(){
    return `Hello`
}
console.log(user99)
console.log(user99.Name)
console.log(user99.Age)
console.log(user99.SayHello())

/* This Keyword */

/*
    mli katkon da5l  object exactement f methode kt3aml ka object || 5arj katkon WINDOW
*/

console.log(this);
console.log(this === window);

myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
    console.log(this);
    return this;
}
sayHello();

console.log(sayHello() === window);

// document.getElementById("cl").onclick = function () {
//     console.log(this);
// };

let user100 = {
    age: 38,
    ageInDays: function () {
        console.log(this);
        return this.age * 365;
    },
};

console.log(user100.age);
console.log(user100.ageInDays());



/* Create Object With Create Method: Katchbah n inheritance li kayna f OOP */

let user9999 = {
    Age: 90,
    DoubleAge: function(){
        return this.Age * 2
    },
}

// delete(user9999.Age)
console.log(user9999)
console.log(user9999.Age)
console.log(user9999.DoubleAge())

// let obj = Object.create({});
// obj.a = 100;
// console.log(obj);
// let copyObj = Object.create(user);
// copyObj.age = 50;
// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

/* Create Object With Assign Method */

let obj1 ={
    prop1: 1,
    meth1: function(){
        return this.prop1
    },
};

let obj2 = {
    prop2: 2,
    meth2: function () {
        return this.prop2
    },
};

let TargetObject = {
    prop1: 100,
    prop3: 3, 
};

let FinalObject = Object.assign(TargetObject, obj1, obj2)
FinalObject.prop1= 1000000 // Update
console.log(FinalObject)

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 }); // cxan you add prop in  the objec.assign
console.log(newObject);

// Methodes Object
let user = {
    name: "Ali",
    age: 20,
    city: "Tanger"
}

/* -------------------------
   1. Object.keys()
   كترجع غير المفاتيح (keys)
--------------------------*/
console.log(Object.keys(user))
// ["name", "age", "city"]

/* -------------------------
   2. Object.values()
   كترجع غير القيم (values)
--------------------------*/
console.log(Object.values(user))
// ["Ali", 20, "Tanger"]

/* -------------------------
   3. Object.entries()
   كترجع key + value مع بعض
--------------------------*/
console.log(Object.entries(user))
// [["name","Ali"], ["age",20], ["city","Tanger"]]

/* -------------------------
   4. Object.freeze()
   كيقفل object (ما يمكنش نبدلوه)
--------------------------*/
Object.freeze(user)
user.name = "Ahmed" // ما غاديش يتبدل
console.log(user.name)
// Ali

/* -------------------------
   5. Object.assign()
   كينسخ أو كيجمع objects
--------------------------*/
let extra = {
    country: "Morocco"
}
let newUser = Object.assign({}, user, extra)
console.log(newUser)// { name, age, city, country }

/* -------------------------
   6. Object.hasOwn()
   كتشوف واش key موجودة داخل object
--------------------------*/
console.log(Object.hasOwn(user, "name")) // true
console.log(Object.hasOwn(user, "email")) // false

/* -------------------------
   5. Object.seal()
   كيقفل object ولكن كيسمح بتعديل القيم
   (ما يمكنش نضيفو أو نحيدو keys)
--------------------------*/
Object.seal(user)

user.age = 25   // مسموح
user.newKey = "test" // ممنوع