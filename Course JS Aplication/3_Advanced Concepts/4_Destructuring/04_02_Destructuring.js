
/* 1-
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];
[a = "A", b, c, d, e = "Osama"] = myFriends;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
// console.log(myFriends[4]);

let [, y, , z] = myFriends;

console.log(y);
console.log(z);

/* 2-
  Destructuring
  - Destructuring Array Advanced Examples
*/
let myFriends1 = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];
let [, , , [a1, , [, b2]]] = myFriends1;
console.log(a1); // Shady
console.log(b2); // Gamal

/* 3-
  Destructuring
  - Destructuring Array => Swapping Variables
*/
let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video
// // Change Book Value
// book = video; // Book
// // Change Video Value
// video = stash; // Video
[book, video] = [video, book];
console.log(book);
console.log(video);

/* 4-
  Destructuring
  - Destructuring Object
*/
const user1 = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

/* =========================
   Object Destructuring
   =========================
   
   استخراج القيم من object
   وتخزينها مباشرة في variables
*/

const {
  // يأخذ قيمة theName
  theName: t,
  // يأخذ قيمة theAge
  theAge,
  // يأخذ قيمة theCountry
  theCountry

} = user1;

/* =========================
   طباعة القيم
   =========================
*/
console.log(t); // Osama
console.log(theAge); // 39
console.log(theCountry); // Egypt

/* 5-
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};
const {
  theName: n,
  theAge: a2,
  theCountry1,
  theColor: co = "Red",
  skills: { html: h, css },
} = user;

console.log(n);
console.log(a2);
console.log(theCountry1);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);
const { html: skillOne, css: skillTwo } = user.skills;
console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);

/* 6-
  Destructuring
  - Destructuring Function Parameters
*/

const user3 = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};
showDetails(user3);
// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }
function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Skill Progress Is ${c}`);
}

/* 7-
  Destructuring
  - Destructuring Mixed Content
*/

const user9 = {
  theName: "Osama",
  theAge: 39,
  // Array داخل object
  skills: ["HTML", "CSS", "JavaScript"],
  // Object داخل object
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

/* =========================
   Object Destructuring
   =========================
*/
const {
  /* 
  تغيير اسم variable
  theName => n1
  */
  theName: n1,
  /* 
  theAge => a9
  */
  theAge: a9,
  /* 
  الدخول إلى skills array

  , , three
  => تجاهل أول عنصر
  => تجاهل ثاني عنصر
  => أخذ ثالث عنصر
  */
  skills: [, , three],

  /* 
  الدخول إلى addresses object
  egypt => e2
  */
  addresses: {
    egypt: e2
  },
} = user9;

/* =========================
   النتائج
   =========================
*/
console.log(n1); // Osama
console.log(a9); // 39
console.log(three); // JavaScript
console.log(e2); // Cairo
console.log(`Your Name Is: ${n1}`);
console.log(`Your Age Is: ${a9}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${e2}`);

console.log("##".repeat(20))
// challenge
let chosen = 2;
let myFriends33 =
  [{ title: "ossama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["python", "django"] },
  { title: "sayed", age: 33, available: true, skills: ["PHP", "Laravel"] }]

  // Destructuring
  const [{ title: a99, age: b99, available: c99, skills: [, d99] },
  { title: e99, age: f99, available: g99, skills: [, h99] },
  { title: i99, age: j99, available: k99, skills: [, l99] }]  = myFriends33 

if (chosen === 1){
  console.log(a99)
  console.log(b99)
  console.log(`${ c99 ? "": "Not" } available`)
  console.log(d99)
}
if(chosen === 2){
  console.log(e99)
  console.log(f99)
  console.log(`${g99 ? "" : "Not"} available`)
  console.log(h99)
}
if (chosen === 3) {
  console.log(i99)
  console.log(j99)
  console.log(`${k99 ? "" : "Not"} available`)
  console.log(l99)
}

// best practice
// const index = chosen - 1;

// const {
//   name1,
//   age,
//   available,
//   skills: [, framework],
// } = friends[index];

// console.log(name1);
// console.log(age);
// console.log(`${available ? "" : "Not "}Available`);
// console.log(framework);
