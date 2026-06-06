/* 1-
  BOM [Browser Object Model]
  Local Storage
  - setItem: add data 
  - getItem: get data
  - removeItem: remove data when 
  - clear: remove all data, when you select the key
  - key: get Name Key when you set indix

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

/* =========================
   setItem()
   =========================
   تخزين البيانات داخل localStorage
*/

localStorage.setItem("name", "Hatim");
localStorage.setItem("age", "18");
localStorage.setItem("color", "red");

/* =========================
   getItem()
   =========================
   جلب البيانات من localStorage ب مفتاح
*/

console.log(
    localStorage.getItem("name")
);
console.log(
    localStorage.getItem("age")
);
console.log(
    localStorage.getItem("color")
);

/* =========================
   removeItem()
   =========================
   حذف عنصر واحد فقط
*/
localStorage.removeItem("age");

/* =========================
   clear()
   =========================
   حذف جميع البيانات
*/
// localStorage.clear();

/* =========================
   length
   =========================
   معرفة عدد العناصر المخزنة
*/

console.log(localStorage.length);

/* =========================
   key()
   =========================
   جلب اسم key حسب index
*/

console.log(localStorage.key(0));

/* =========================
   Example Real
   =========================
*/

// جلب اللون المحفوظ
let myColor = localStorage.getItem("color");


// تطبيق اللون على الصفحة
document.body.style.backgroundColor = myColor;


// set color In page
// document.body.style.backgroundColor = window.localStorage.getItem("color")

/* 2-
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
    // If There Is Color In Local Storage
    // [1] Add Color To Div
    exp.style.backgroundColor = window.localStorage.getItem("color");
    // [2] Remove Active Class From All Lis
    lis.forEach((li) => {
        li.classList.remove("active");
    });
    // [3] Add Active Class To Current Color
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // console.log(e.currentTarget.dataset.color);
        // Remove Active Class From all Lis
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        // Add Active Class To Current Element
        e.currentTarget.classList.add("active");
        // Add Current Color To Local Storage
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        // Change Div Background Color
        exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
});

// 3-

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

/* =========================
   setItem()
   =========================
   تخزين البيانات
*/
sessionStorage.setItem("name", "Hatim");

/* =========================
   getItem()
   =========================
   جلب البيانات
*/
console.log(
    sessionStorage.getItem("name")
);

/* =========================
   removeItem()
   =========================
   حذف عنصر واحد
*/
sessionStorage.removeItem("name");

/* =========================
   clear()
   =========================
   حذف جميع البيانات
*/
// sessionStorage.clear();

/* =========================
   length
   =========================
   عدد العناصر المخزنة
*/
console.log(sessionStorage.length);

/* =========================
   key()
   =========================
   جلب اسم key حسب index
*/
console.log(sessionStorage.key(0));

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
    window.localStorage.setItem("input-name", this.value);
};