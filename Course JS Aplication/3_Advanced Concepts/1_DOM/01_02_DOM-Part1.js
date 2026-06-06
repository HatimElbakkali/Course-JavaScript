/* 1-DOM = Document Object Model */

// Find Element By ID
// كنلقاو عنصر واحد باستعمال id (خاص يكون unique)
let myIdElement = document.getElementById("my-div");
console.log(myIdElement);

// Find Element By Tag Name
// كنلقاو جميع العناصر حسب tag (بحال p, div, h1...)
let myTagNameElement = document.getElementsByTagName("p");
// كيرجع HTMLCollection لذلك كنستعمل index
console.log(myTagNameElement[1]);

// Find Element By Class Name
// كنلقاو جميع العناصر اللي عندهم نفس class
let myClassNameElement = document.getElementsByClassName("my-span");
// كيرجع مجموعة لذلك كنستعمل index
console.log(myClassNameElement[1]);

// querySelector
// كيمكنك تختار أي عنصر (id, class, tag)
// ولكن كيرجع غير أول عنصر كيلقاه
let myQueryElement = document.querySelector(".Name");
console.log(myQueryElement);

// querySelectorAll
// كيرجع جميع العناصر اللي كيطابقو selector
let myQueryAllElement = document.querySelectorAll(".my-span");
// كيرجع NodeList لذلك كنستعمل index
console.log(myQueryAllElement[1]);

// الوصول لعناصر أخرى من document
// عنوان الصفحة
console.log(document.title);
// body ديال الصفحة كاملة
console.log(document.body);
// أول input داخل form
console.log(document.forms[0].one);
// أول link فـ الصفحة
console.log(document.links[0]);
console.log("#".repeat(30));

// #######################################################################################################################
/* 2- Get Set Elements Content And Attributes */
let myElement = document.querySelector(".js");
console.log(myElement.innerHTML); // give in console unchanged in Html code
console.log(myElement.textContent); // give in Html page unchanged
myElement.innerHTML = "hatim is smart <span> student </span>";
console.log(myElement.innerHTML); // print in page but dont tags
myElement.textContent = "hatim is smart <span> student </span>";
console.log(myElement.textContent); // print in page but tags because deal with Content just print Content

// Image or links or forms Attributes get Attributes and content
document.images[0].src = "https://www.google.com/?zx=1776881439865";
document.images[0].alt = "Batata";
document.images[0].title = "Batata";
document.images[0].id = "Bat";
document.images[0].className = "Bat20";

// getAttribute and setAttribute
let MyLink = document.querySelector(".link");
console.log(MyLink.getAttribute("class")); // get Content Attributes
console.log(MyLink.getAttribute("href")); // get Content Attributes
console.log(
  MyLink.setAttribute("href", "https://hatimelbakkali.github.io/Jawlah./"),
); // Manipuler or edit content Attributes
console.log(MyLink.setAttribute("title", "orange")); // Manipuler or edit content Attributes
console.log("#".repeat(30));

//#######################################################################################################################
/* 3- Check Attributes And Examples */
// attributes: kat3tik attributes li dayrom fdik P all
console.log(document.getElementsByClassName("para20")[0].attributes);

// hasattribute: its a check the attributes is found(true) or not found(false)
let myP = document.getElementsByClassName("para20")[0];
if (myP.hasAttribute("class")) {
  console.log("true");
  // myP.removeAttribute("class")
} else {
  console.log("false");
}

// removeAttribute
let myP10 = document.getElementsByClassName("para20")[0];
if (myP10.hasAttribute("title")) {
  if (myP10.getAttribute("title") === "") {
    myP10.removeAttribute("title");
  } else {
    myP10.setAttribute("title", "Free fire");
  }
} else {
  console.log("false");
}

// hasAttributes
if (document.getElementsByTagName("div")[2].hasAttributes()) {
  console.log("has attributes");
} else {
  console.log("no has attributes");
}
console.log("#".repeat(30));

/* 4- Create And Append Elements */

// إنشاء عنصر HTML جديد من نوع div
// يعني كنصايبو tag جديد ولكن مازال ما تبانش فـ الصفحة
let element = document.createElement("div");

// إنشاء attribute (خاصية) جديدة
// هنا صايبنا attribute اسمها title ولكن مازال ما تعطاتش لعنصر
let Myatrr = document.createAttribute("title");

// إنشاء نص (text node)
// يعني نص داخل DOM ماشي داخل HTML مباشرة
let mytext = document.createTextNode("Familly");

// إنشاء comment (تعليق داخل DOM)
// ما كيبانش فـ الصفحة ولكن كيبان فـ DOM
let mycomment = document.createComment("this mohamed stupid");

element.className = "Mohamed"; // creat class and content Mohamed
element.setAttributeNode(Myatrr); // creat attributes but empty
element.setAttribute("id", "Hatim"); // creat attributes
element.appendChild(mycomment); // createComment
element.appendChild(mytext); // add content in div
document.body.appendChild(element); // print in the page

// إضافة النص داخل الـ div
div.append(text);

// إضافة الـ div إلى الصفحة
document.body.append(div);

//  Product With Title And Description Practice
// for (let i = 1; i < 10; i++) {
//     let Product = document.createElement("div")
//     let h3 = document.createElement("h3")
//     let Para = document.createElement("p")
//     let myProduct = document.createTextNode("Title Product")
//     let textH3 = document.createTextNode("Product One")
//     let textP = document.createTextNode("oil")
//     Product.className = "Product"
//     h3.appendChild(textH3)
//     Para.appendChild(textP)
//     // Product.appendChild(myProduct)
//     Product.appendChild(h3)
//     Product.appendChild(Para)
//     document.body.appendChild(Product)
//     // document.body.appendChild(Para)
// }
console.log("#".repeat(30));

/* 5- Deal With Children's */

let Parent = document.getElementsByClassName("Five")[0];

// children
// كيرجع غير العناصر (Element nodes فقط)
// يعني HTML tags فقط داخل Parent
console.log(Parent.children);

// أول طفل (Element فقط)
console.log(Parent.children[0]);

// childNodes
// كيرجع جميع الأنواع:
// - Elements
// - Text nodes (spaces, line breaks)
console.log(Parent.childNodes);

// عنصر رقم 3 داخل childNodes
console.log(Parent.childNodes[3]);

// firstChild
// أول node (ممكن يكون text أو element)
console.log(Parent.firstChild);

// lastChild
// آخر node (ممكن يكون text أو element)
console.log(Parent.lastChild);

// firstElementChild
// أول عنصر HTML فقط (بدون text)
console.log(Parent.firstElementChild);

// lastElementChild
// آخر عنصر HTML فقط
console.log(Parent.lastElementChild);
console.log("#".repeat(30));

/*
   6- DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu //Click right
  --- onmouseenter // mouse inside element like hover
  --- onmouseleave // mouse outside element 

  --- onload // download page 
  --- onscroll // when scroll in page
  --- onresize // when changed window

  --- onfocus // when enter inputs
  --- onblur // when quit inputs
  --- onsubmit // when send data form

  // 3ml 3a introduction fa9t n Event
*/

let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
  console.log("Clicked");
};

window.onresize = function () {
  console.log("Scroll");
};

console.log("#".repeat(30));
/* 7-  DOM [Event] Validate Form And Prevent Default */

// document.getElementById("fatiha").onmouseenter = function(Event){
//   console.log(Event)
// }

// Explain preventDefault() 
document.getElementById("fatiha").onclick = function (Event) {
  console.log(Event)
  Event.preventDefault() // Prevent Default Behavior (example <a> when click not send in anthoer page)
}

// Validate Form
let userInput = document.querySelector("[name = 'username']");
let ageInput = document.querySelector("[name = 'age']");
document.getElementById("form1").onsubmit = function (yasin) {
  let userValid = false;
  let ageValid = false;
  // console.log(userInput.value)
  // console.log(userInput.value.length)
  if (userInput.value !== "" && userInput.value.length <= 10){
    userValid = true;
  }
  if (ageInput.value !== ""){
    ageValid = true
  }
  if (userValid === false || ageValid === false) {
    yasin.preventDefault();
  }
}
