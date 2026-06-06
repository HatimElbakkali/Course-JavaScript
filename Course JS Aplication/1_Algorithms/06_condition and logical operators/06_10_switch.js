/* Switch Statement */

let day = 0; // القيمة التي سيتم التحقق منها

switch (day) {
  case 0:
    console.log("saturday"); // إذا كانت القيمة 0
    break; // يوقف التنفيذ هنا ولا يكمل لباقي الحالات

  case 1:
    console.log("sunday"); // إذا كانت القيمة 1
    break; // بدونها سيكمل التنفيذ

  case 2:
  case 3:
    // يمكن جمع أكثر من case لنفس النتيجة
    console.log("monday"); // إذا كانت القيمة 2 أو 3
    break;

  default:
    // تُنفذ إذا لم تتحقق أي حالة من الحالات السابقة
    console.log("Unknown day");
    break;
}

/* Chalenge */

// EX1
let job = "Manager";
let salary = 0;

switch (job) {
  case "Manger":
    salary = 8000;
    break;

  case "Support":
  case "IT":
    salary = 6000;
    break;

  case "Developer":
  case "Designer":
    salary = 7000;
    break;

  default:
    salary = 4000;
    break;
}

// EX 2

let holidays = 0;
let money = 0;

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}

/* Assingnement */

let days = "   friday  ";
console.log(days.trim()[0].toUpperCase()+days.trim().slice(1));

let day1 = "Friday";
let day2 = "Saturday";
let day3 = "Sunday";
let day4 = "Monday";
let day5 = "Thursday";

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available")
  
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");

  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");

  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");

  case "World":
    console.log("Its Not A Valid Day");
}