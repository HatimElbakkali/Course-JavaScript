/* 1-
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example 

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

// function makeItres(e){
//     e.target.style.color = "red";
// }
// let p = document.querySelector(".test");
// p.addEventListener("click", makeItres)

// //

// function iAmCallback(){
//     console.log("Iam A Callback Function")
// }
// setTimeout(iAmCallback, 2000);

// //

// setTimeout(() => {
//     console.log("Download Photo From URL");
//     setTimeout(() => {
//         console.log("Resize Photo");
//         setTimeout(() => {
//             console.log("Add Logo To The Photo");
//             setTimeout(() => {
//                 console.log("Show The Photo In Website");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

/* 2-
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((Resolved, Rejected)=>{
//     let connect = false ;
//     if(connect){
//         Resolved("connection Established")
//     }else{
//         Rejected(Error("connection Failed"))
//     }
// }).then(
//     (resolveValue) => console.log(`Good ${resolveValue}`),
//     (RejectValue) => console.log(`bad ${RejectValue}`)
// )
// console.log(myPromise)

// const myPromise = new Promise((Resolved, Rejected) => {
//     let connect = true;
//     if (connect) {
//         Resolved("connection Established")
//     } else {
//         Rejected(Error("connection Failed"))
//     }
// })
// console.log(myPromise)

// myPromise.then(
//     (resolveValue) => console.log(`Good ${resolveValue}`),
//     (RejectValue) => console.log(`bad ${RejectValue}`)
// )


/* 3-
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

// const myPromise = new Promise((Resolved, Rejected) => {
//   let employees = [];
//   if (employees.length === 4) {
//     Resolved(employees);
//   } else {
//     Rejected(Error("Number Of Employees is Not 4"));
//   }
// });
// myPromise
//   .then((resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     resolveValue.length = 1;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     console.log(`The Choosen Emplye Is ${resolveValue}`);
//   })
//   .catch((rejectedReason) => console.log(rejectedReason))
//   .finally(console.log("The Operation Is Done"));


/* 4-
Promise And XHR
*/
// const getData = (apiLink) => {
//   return new Promise((Resolved, Rejected) => {
//     let Myrequest = new XMLHttpRequest();
//     Myrequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         Resolved(JSON.parse(this.responseText))
//       } else {
//         Rejected(Error("No Data Found"))
//       }
//     };
//     Myrequest.open(
//       "GET",
//       apiLink,
//       true,
//     );
//     // Myrequest.send();
//   });
// };
// getData("https://api.github.com/users/HatimElbakkali/repos").then(
//   (result) => {
//     result.length = 4;
//     return result
//   }).then((result) => console.log(result[0].name)
//   ).catch((rej) => console.log(rej))

/* 5-
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/
fetch("https://api.github.com/users/HatimElbakkali/repos")
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[0].name);
  });

fetch("https://api.example.com/users", {
  /* =========================
     نوع الطلب
     =========================
     POST = إرسال data للسيرفر
  */
  method: "POST",

  /* =========================
     headers = معلومات على البيانات
     =========================
     Content-Type: application/json
     يعني: data غادي تمشي بصيغة JSON
  */
  headers: {
    "Content-Type": "application/json"
  },

  /* =========================
     body = البيانات اللي غادي نرسلو
     =========================
     خاصها تكون String لذلك كنستعملو JSON.stringify
  */
  body: JSON.stringify({
    name: "Hatim",
    age: 20
  })
})

  /* =========================
     response ديال السيرفر
     =========================
     كنحولوه من JSON إلى Object
  */
  .then((response) => response.json())

  /* =========================
     data = النتيجة النهائية
     =========================
     هنا كنستعملو البيانات اللي رجعات من السيرفر
  */
  .then((data) => {
    console.log("Success:", data);
  })

  /* =========================
     catch = معالجة الأخطاء
     =========================
     إلا وقع مشكل (internet / server error)
  */
  .catch((error) => {
    console.log("Error:", error);
  });

/* 6-
Promise
- All: if found one Rejecte return Rejecte
- All Settled: if found Rejecte or Resolved return all
- Race: if get Rejecte or Resolve the first one return (Rejecte or Resolve )
*/
// const MyFirstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam the first promise")
//   }, 5000);
// })

// const MySecondePromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Iam the Second promise")
//   }, 1000);
// })

// const MythreePromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam the three promise")
//   }, 2000);
// })

// Promise.all([MyFirstPromise, MySecondePromise, MythreePromise]).then(
//   (resolveValue) => console.log(resolveValue),
//   (RejectValue) => console.log(`Rejected: ${RejectValue}`)
// )

// Promise.allSettled([MyFirstPromise, MySecondePromise, MythreePromise]).then(
//   (resolveValue) => console.log(resolveValue),
//   (RejectValue) => console.log(`Rejected: ${RejectValue}`)
// )

// Promise.race([MyFirstPromise, MySecondePromise, MythreePromise]).then(
//   (resolveValue) => console.log(resolveValue),
//   (RejectValue) => console.log(`Rejected: ${RejectValue}`)
// )

/* 7-
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/
// 1-
// function getData1() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("users found")
//     } else {
//       rej("No users found")
//     }
//   })
// }

// getData1().then(
//   (resolveValue) => console.log(resolveValue),
//   (RejectValue) => console.log(`Rejected ${RejectValue}`),
// )

// 2-
// function getData1() {
//   return new Promise((res, rej) => {
//     let users = ["HatimElbakkali"];
//     if (users.length > 0) {
//       return Promise.resolve("users found");
//     } else {
//       return Promise.reject(" No users found");
//     }
//   })
// }
// getData1().then(
//   (resolveValue) => console.log(resolveValue),
//   (RejectValue) => console.log(`Rejected ${RejectValue}`),
// )

// 3-
// async function getData1() {
//     let users = ["hatim"];
//     if (users.length > 0) {
//       return ("users found");
//     } else {
//       throw new Error(" No users found");
//     }
// }
// console.log(getData1());


// getData1().then(
//   (resolveValue) => console.log(resolveValue),
//   (RejectValue) => console.log(`Rejected ${RejectValue}`),
// )

/* 8-
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Iam The Good Promise");
//     reject(Error("Iam The Bad Promise"));
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   // myPromise.then((resolvedValue) => console.log(resolvedValue));
//   // console.log(await myPromise);
//   console.log(await myPromise.catch((err) => err));
//   console.log("After Promise");
// }
// readData();

/*
  Async & Await With Try, Catch, Finally
*/

// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(("Iam The Bad Promise"));
//   }, 3000);
// });
// async function readData1() {
//   console.log("Before Promise");
//   try{
//     console.log(await myPromise1);
//   } catch(reason){
//     console.log(`Reason: ${reason}`);
//   } finally{
//     console.log("After Promise");
//   }
// }
// readData1();

async function fetchData() {
  // كيتطبع أول حاجة
  console.log("Before Fetch");
  try {
    /* =========================
       إرسال Request إلى GitHub API
       =========================
       await كتسنى حتى يوصل Response
    */
    let myData1 = await fetch(
      "https://api.github.com/users/HatimElbakkali/repos"
    );

    /* =========================
       تحويل JSON إلى JS Object
       =========================
       json() كترجع Promise
       لذلك استعملنا await
    */
    console.log(await myData1.json());
  } catch (reason) {
    /* =========================
       معالجة الأخطاء
       =========================
       إذا وقع خطأ في fetch
       أو json()
       reason = معلومات الخطأ
    */
    console.log(`Reason: ${reason}`);

  } finally {
    /* =========================
       يتنفذ دائماً
       =========================
       سواء نجح الطلب أو فشل
    */
    console.log("After Fetch");
  }
}
// استدعاء الدالة
fetchData();

try {
  // نحاولو ننفذو هاد الكود
  // ولكن x ما معرفاش → غادي يوقع error
  console.log(x);
} catch (error) {
  // إلا وقع أي خطأ داخل try
  // البرنامج ما كيتوقفش
  // وكنمشي هنا باش نعالجو المشكل
  console.log("Error happened");
}