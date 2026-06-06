/*1-
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/
let dateNow = new Date();
console.log(dateNow); // date now Simple

// 1000 mille Seconde = 1 seconde
console.log(Date.now()) // get date mill seconde 

let seconds = Date.now()/1000
console.log(seconds)

let minutes = seconds / 60;
console.log(minutes)

let hours = minutes / 60;
console.log(hours)

let days = hours / 24;
console.log(days)

let Year = days / 365;
console.log(Year)
console.log("*".repeat(40))

/* 2-
  get Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/
console.log(dateNow.getTime()) // Number Of Milliseconds 1970 to Now
console.log(dateNow.getDate()) // day of Month Now
console.log(dateNow.getFullYear()) // get year Now
console.log(dateNow.getMonth()) // you get month Now but you get month index not real
console.log(dateNow.getDay())
console.log(dateNow.getHours()); // you get hours today
console.log(dateNow.getMinutes()); // you get Minutes today
console.log(dateNow.getSeconds()); // you get Seconds today
// let birthday = new Date("sep 29, 07")
// let dateDiff = dateNow1 - birthday;
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365)
console.log("*".repeat(40))


/* 3-
  set Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

// edit Time in Milliseconds
dateNow.setTime(10000);
console.log(dateNow)
// edit date
dateNow.setDate(31);
console.log(dateNow)
// edit year and month
dateNow.setFullYear(2075, 11);
console.log(dateNow)
// edit month and days
dateNow.setMonth(13);
console.log(dateNow)

/* 4-
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Oct 25 1982"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(404344800000);
console.log(date2);

let date3 = new Date("10-25-1982");
console.log(date3);

let date4 = new Date("1982-10-25");
console.log(date4);

let date5 = new Date("1982-10");
console.log(date5);

let date6 = new Date("82");
console.log(date6);

let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);

let date8 = new Date(1982, 9, 25);
console.log(date8);

let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9);

/* 5-
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/
// start Time 
let start = new Date();

// operation 
for(let i = 0; i<1000; i++){
  document.writeln(`<div>${i}</div>`)
}
// Time End
let end = new Date();

// operation Duration
let Duration = end - start
console.log(Duration)

/* 6-
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumber() {
  // أول مرة next() كتوصل هنا
  yield 1;
  /* 
  ملاحظة مهمة:
  من بعد yield 1 التنفيذ كيتوقف
  وما كيتنفذش console.log حتى ندير next() مرة أخرى
  */
  console.log("hello after yield 1");
  // next() الثانية كتوصل هنا
  yield 2;
  // next() الثالثة
  yield 3;
  // next() الرابعة
  yield 4;
}
// تشغيل generator
let Generator = generateNumber();
/* =========================
   كل next() كترجع value وتكمل من نفس المكان
   =========================
*/
console.log(Generator.next());
// { value: 1, done: false }
console.log(Generator.next());
// هنا غادي يطبع: "hello after yield 1"
// ومن بعد يرجع: { value: 2, done: false }
console.log(Generator.next());
// { value: 3, done: false }
console.log(Generator.next());
// { value: 4, done: false }
console.log(Generator.next());
// { value: undefined, done: true }

for(let Value of generateNumber()){
  console.log(Value);
}

for (let Value of Generator) {
  console.log(Value);
}

/* 7-
  Generators
  - Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll(){
  yield* generateNums()
  yield* generateLetters()
  yield* [4, 5, 6]
}
let generator10 = generateAll();
console.log(generator10.next())
console.log(generator10.next())
console.log(generator10.next())
console.log(generator10.next())
console.log(generator10.next())
console.log(generator10.next())
console.log(generator10.return()) // break
console.log(generator10.next())
console.log(generator10.next())
console.log(generator10.next())

/* 7-
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/
function* generateNumbers() {
  // yield 1;
  // yield 2;
  // return "A";
  // yield 3;
  // yield 4;
  let index = 0;

  while (true) {
    yield index++;
  }
}

let generator = generateNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

/* 8-
  Modules
  - Import And Export
*/

let a99 = 10;
let arr99 = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a99 as myNumber, arr99, saySomething };
export default function () {
  return `Hello`;
}

