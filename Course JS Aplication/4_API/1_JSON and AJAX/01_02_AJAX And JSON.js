/* 1-
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================
*/


/* 2-
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null
*/

/* 3-
  JSON
  - API Overview
  - Tools To Test API
  - Preview Github API
*/

/* 4-
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);

/* 5-
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// // Asynchronous
// console.log("1");
// console.log("2");
// setTimeout(() => console.log("Operation"), 3000);
// console.log("3");


/* =========================
   Synchronous (متزامن)
   =========================
*/
console.log("1"); // كيتنفذ مباشرة
console.log("2"); // كيتنفذ من بعدو مباشرة
console.log("3"); // كيتنفذ من بعد
/*
النتيجة:
1
2
3
حيت JavaScript كتنفذ سطر بسطر
*/

/* =========================
   Asynchronous (غير متزامن)
   =========================
*/
console.log("1"); // كيتنفذ مباشرة
setTimeout(() => {
  console.log("2");
  // هاد السطر غادي يتأخر 2 ثواني
}, 2000);
console.log("3"); // كيتنفذ مباشرة ما كينتظرش setTimeout

/*
النتيجة:
1
3
2
حيت setTimeout كيدخل في Web API
و JavaScript ما كتسناهوش
*/


/* 6-
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

// setTimeout(() => {
//   console.log("Web API");
// }, 0);

// function one() {
//   console.log("One");
// }
// function two() {
//   one();
//   console.log("Two");
// }
// function three() {
//   two();
//   console.log("Three");
// }

// three();

/*
=================================
console.log("One");
=================================
function one() {
  console.log("One");
}
=================================
function two() {
  one();
  console.log("Two");
}
=================================
function three() {
  two();
  console.log("Three");
}
=================================
*/

console.log("#####");
console.log("One");
console.log("Two");
console.log("Three");

/* 7-
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
*/

// console.log("One");
// setTimeout(() => {
//   console.log("Three");
// }, 0);
// setTimeout(() => {
//   console.log("Four");
// }, 0);
// console.log("Two");

// setTimeout(() => {
//   console.log(myVar);
// }, 0);

// let myVar = 100;
// myVar += 100;

/* 8-
  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code: 
| البداية | المعنى       |
| ------- | ------------- |
| 1xx     | معلومات      |
| 2xx     | نجاح          |
| 3xx     | Redirect      |
| 4xx     | خطأ من Client |
| 5xx     | خطأ من Server |

*/

// let req = new XMLHttpRequest();
// console.log(req);

/* 9-
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Receivedz
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

// let Myrequest = new XMLHttpRequest()
// Myrequest.open("GET", "https://api.github.com/users/HatimElbakkali/repos", true)
// Myrequest.send();
// console.log(Myrequest)

// Myrequest.onreadystatechange = function(){
//   // console.log(Myrequest.readyState);
//   // console.log(Myrequest.status);
//   if(this.readyState === 4 && this.status === 200){
//     console.log(this.responseText)
//   }
// }

/* 10-
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/


/* =========================
   1) إنشاء Request
   =========================
*/
let Myrequest = new XMLHttpRequest();

/* =========================
   2) فتح الاتصال مع API
   =========================
   GET = نجيب data
   الرابط ديال GitHub API كيرجع repos
*/
Myrequest.open(
  "GET",
  "https://api.github.com/users/HatimElbakkali/repos",
  true // async = true (ما نوقفوش الصفحة)
);

/* =========================
   3) إرسال الطلب للسيرفر
   =========================
*/
Myrequest.send();

/* =========================
   4) مراقبة حالة الطلب
   =========================
*/
Myrequest.onreadystatechange = function () {
  /*
    readyState === 4
    يعني: الطلب تسالي وجانا الرد

    status === 200
    يعني: كلشي مزيان (OK)
  */
  if (this.readyState === 4 && this.status === 200) {
    /* =========================
       5) البيانات جاية كنص (JSON string)
       =========================
    */
    console.log(this.responseText);

    /* =========================
       6) تحويل JSON → Object
       =========================
    */
    let jsData = JSON.parse(this.responseText);

    /* =========================
       7) loop على repos
       =========================
    */
    for (let i = 0; i < jsData.length; i++) {
      /* =========================
         8) إنشاء عنصر HTML
         =========================
      */
      let div = document.createElement("div");

      /* =========================
         9) جلب اسم repo
         =========================
      */
      let repoName = document.createTextNode(jsData[i].full_name);

      /* =========================
         10) إدخال الاسم داخل div
         =========================
      */
      div.append(repoName);

      /* =========================
         11) إضافة div للصفحة
         =========================
      */
      document.body.append(div);
    }
  }
};