/* EX 1  */

// Test Case 1
let num = 9; // "009"

if (num < 10) {
  console.log("00" + num);
}

// Test Case 2
let num2 = 20; // "020"
if (num2 > 10 && num2 < 100) {
  console.log("0" + num2);
}

// Test Case 3
let num3 = 110; // "110"
if (num3 >= 100) {
  console.log(num3.toString());
}

/* EX 2  */
let num1 = 9;
let str = "9";
let str2 = "20";

// 1
if (num1 == str) {
  console.log(`${num1} Is The Same Value As ${str}`);
}

// 2
if (num1 !== str) {
  console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
}

// 3
if (num1 !== str2) {
  console.log(`${num1}  Is Not The Same Value Or The Same Type As ${str}`);
}

// 4
if (str !== str2) {
  console.log(`${num1} Is The Same Type As ${str} But Not The Same Value`);
}

/* EX 3  */

let num11 = 10;
let num22 = 30;
let num33 = "30";

if (num33 > num11 && num33 == num22) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number",
  );

  if (num33 > num11 && num33 == num22 && num33 !== num22) {
    console.log(
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number",
    );
  }

  if (num33 !== num11 && num33 !== num22) {
    console.log(
      num33 + "Value And Type Is Not The Same As" + num22 + "And Type Is Not The Same As",
    );
  }
}

