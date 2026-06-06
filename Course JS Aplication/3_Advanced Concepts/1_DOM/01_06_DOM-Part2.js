/* 1- Event Simulation: it a execute event but not user, use code
    - click
    - focus: kadir focus
    - onblur: when quit form
    - oninput
*/

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function(){
//     two.focus()
// }

// one.onblur = function(){
//     document.links[0].click()
// }

let one = document.querySelector(".one");
let two = document.querySelector(".two");
window.onload = function () {
    one.focus()
}
one.oninput = function () {
    if (one.value.length === 1) {
        two.focus()
    }
}

/* 2-
  DOM [Class List]
  - classList: get all class
  --- length: number of element
  --- contains: check is a element found or not found
  --- item(index): if write index get name class
  --- add: add class
  --- remove: remove class
  --- toggle: if class found = delet, else if class not found = add
*/

let element = document.getElementById("my-div");

/* -----------------------------
   contains()
   -----------------------------
   التحقق هل class موجودة أم لا
*/
console.log(element.classList.contains("two"));

/* -----------------------------
   item(index)
   -----------------------------
   ترجع اسم class حسب index
*/
console.log(element.classList.item(3));

/* -----------------------------
   add()
   -----------------------------
   إضافة class أو أكثر
*/
console.log(
  element.classList.add("hatim", "mohamed")
);

/* -----------------------------
   remove()
   -----------------------------
   حذف class
*/
console.log(
  element.classList.remove("two")
);

/* -----------------------------
   toggle()
   -----------------------------
   إذا كانت class موجودة => يتم حذفها
   إذا لم تكن موجودة => يتم إضافتها
*/
console.log(
  element.classList.toggle("hatim")
);

/* 3-
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/

let element1 = document.getElementById("my-div1");

/* =========================
   الطريقة الأولى لتغيير CSS
   =========================
   نستعمل style.property
   كل خاصية CSS نكتبها بـ camelCase
*/
element1.style.color = "green";        // تغيير اللون
element1.style.fontWeight = "bold";    // جعل الخط غليظ

/* =========================
   الطريقة الثانية (cssText)
   =========================
   نكتب CSS كامل كسلسلة نصية
   يتم استبدال كل CSS السابق
*/
element1.style.cssText = "color: red; opacity: 0.5";

/* =========================
   removeProperty()
   =========================
   حذف خاصية CSS من العنصر
*/
element1.style.removeProperty("color");

/* =========================
   setProperty()
   =========================
   إضافة أو تعديل خاصية CSS
   مع إمكانية استعمال !important
*/
element1.style.setProperty("font-size", "100px", "important");

/* =====================================================
   التعامل مع ملف CSS (styleSheets)
   =====================================================
   نقدر نعدل CSS من ملف خارجي (style.css)
*/

/* حذف خاصية من أول rule في أول stylesheet */
document.styleSheets[0].cssRules[0].style.removeProperty("line-height");

/* تعديل خاصية في CSS خارجي */
document.styleSheets[0].cssRules[0].style.setProperty(
  "background-color",
  "red"
);

/* 4-
  DOM [Deal With Elements]
  - before [Element || String] // Add element before but outside
  - after [Element || String]  // Add element after but outside
  - append [Element || String] // Add element the end but inside
  - prepend [Element || String]// Add element the beginning but inside
  - remove
*/

let element2 = document.getElementById("my-div2");

// إنشاء عنصر جديد (p)
let createdP = document.createElement("p");

/* -----------------------------
   before()
   -----------------------------
   كضيف عنصر أو نص قبل العنصر
   ولكن خارج العنصر (before element)
*/
element2.before("Hello From JS");

/* -----------------------------
   after()
   -----------------------------
   كضيف عنصر أو نص بعد العنصر
   ولكن خارج العنصر (after element)
*/
element2.after("Hello from HTML");

// إضافة عنصر جديد (p) بعد العنصر
element2.after(createdP);

/* -----------------------------
   append()
   -----------------------------
   كضيف عنصر أو نص داخل العنصر
   في الأخير (inside end)
*/
element2.append("hatim");

/* -----------------------------
   prepend()
   -----------------------------
   كضيف عنصر أو نص داخل العنصر
   في البداية (inside start)
*/
element2.prepend("mohamed");

/* -----------------------------
   remove()
   -----------------------------
   كيمسح العنصر كامل من الصفحة
   حتى من DOM (inspect)
*/
element2.remove();

/* 5-
  DOM [Traversing]
  - nextSibling // get ay 7aja moraha kifa ma kant (span, comment....)
  - nextElementSibling // return element(p div ...) only.
  - previousSibling  // hna 9abl
  - previousElementSibling
  - parentElement // mli kadira 3la child kayjiblk parent dyal dik child
*/

let span = document.querySelector(".two1")

// nextSibling
// ترجع أي node موجودة بعد العنصر مباشرة
// يمكن أن تكون:
// - عنصر HTML
// - نص
// - comment
console.log(span.nextSibling)

// nextElementSibling
// ترجع العنصر HTML الموجود بعده مباشرة فقط
// مثل div أو p أو span
console.log(span.nextElementSibling)

// previousSibling
// ترجع أي node موجودة قبل العنصر
// يمكن أن تكون:
// - نص
// - comment
// - عنصر HTML
console.log(span.previousSibling)

// parentElement
// ترجع العنصر الأب الذي يحتوي على span
console.log(span.parentElement)

/* 6-
  DOM [Cloning]
  - cloneNode(Deep) // get Bolean value(true(kayjib element full) or Default value false(kayjib 8a element but content NO))
*/

let myP = document.querySelector(".my-p").cloneNode( ); 
let myDiv = document.querySelector(".my-div3")
myP.id = "hatim"
myDiv.appendChild(myP)

/* 7- 
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myP99 = document.querySelector(".my-p1")

// methode 1
// myP99.onclick = function(){
//   console.log("Message From onclick")
// }

// methode2

// myP99.onclick = one1;
function one1(){
  console.log("Message From onclick 1")
}
function two1() {
  console.log("Message From onclick 2")
}

// addEventListener

myP99.addEventListener("click", function(){
  console.log("Message From onclick Event ")
})

myP99.addEventListener("click", one1);
myP99.addEventListener("click", two1)

// 

myP99.onclick = function(){
  let newP = myP99.cloneNode(true);
  newP.className = "clone"
  document.body.appendChild(newP)
  newP.onclick = function(){
    console.log("hatim")
  }
}



/* =========================
   Form Events (النماذج)
   ========================= */

let input = document.querySelector("input")

// أثناء الكتابة
input.addEventListener("input", function () {
  console.log(input.value)
})

// عند تغيير القيمة
input.addEventListener("change", function () {
  console.log("changed")
})

// عند إرسال الفورم
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault() // منع إعادة تحميل الصفحة
  console.log("form submitted")
})


/* =========================
   Window Events (الصفحة)
   ========================= */

// عند تحميل الصفحة
window.addEventListener("load", function () {
  console.log("page loaded")
})

// عند التمرير
window.addEventListener("scroll", function () {
  console.log("scrolling")
})

// عند تغيير حجم الشاشة
window.addEventListener("resize", function () {
  console.log("resized")
})