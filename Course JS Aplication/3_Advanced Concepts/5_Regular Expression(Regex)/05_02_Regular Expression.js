
/* 1-
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";
let Regex = /elzero/igm;
console.log(myString.match(Regex))
console.log("#".repeat(20));

/* 2-
  Regular Expression(Ranges)

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]
*/

/* Part 1 */

// word
let tld = "Com Net Org Info Code Io Ma"
let tldregex = /(Org|info|io)/ig // (X|Y) => X Or Y
console.log(tld.match(tldregex))

// Number
let nums = "12345678910"
let numsRe = /[0-9]/g // 0 To 9
console.log(nums.match(numsRe))
// ################################
let Notnums = "12345678910"
let NotnumsRe = /[^0-5]/g // Any Character Not 0 To 5 or 0 To 9
console.log(Notnums.match(NotnumsRe))

// Practice
// 1-
let Specialnums = "1!2@3#4$5%678910"
let  SpecialnumsRe = /[^0-9]/g // Any Character 0 To 9
console.log(Specialnums.match(SpecialnumsRe))

// 2-
let Practice = "Os1 Os10s Os2 Os8 Os8Os"
let PracticeRe = /(Os)[5-9](Os)/g // Any Character Not 0 To 5 or 0 To 9
console.log(Practice.match(PracticeRe))
console.log("#".repeat(20));

/* Part 2 */
let myString1 = "AaBbcdefG123!234%^&*";
let atozRE = /[a-z]/g; // small  a to z
let NotatozRE = /[^a-z]/g; // small capital  Not a to z
let AtoZRE = /[A-Z]/g; // capital A to z
let NotAtoZRE = /[^A-Z]/g;// capital Not A to z
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let zero = /[a-z]/ig
let Notzero = /[^a-z]/ig
let Special = /[^A-Za-z0-9]/g
console.log(myString1.match(atozRE))
console.log(myString1.match(NotatozRE))
console.log(myString1.match(AtoZRE))
console.log(myString1.match(NotAtoZRE))
console.log(myString1.match(aAndcAnde))
console.log(myString1.match(NotaAndcAnde))
console.log(myString1.match(zero))
console.log(myString1.match(Notzero))
console.log(myString1.match(Special))
console.log("#".repeat(20));

/* 3-
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/
let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
let dot = /./g;
let word = /\w/g;
let SpecialCharctere = /\W/g;
let Numbers = /\d/g
let NotNumbers = /\D/g
let Space = /\s/g
let NotSpace = /\S/g
let Valid = /\w@\w.(com|net)/g
console.log(email.match(dot))
console.log(email.match(word))
console.log(email.match(SpecialCharctere))
console.log(email.match(NotNumbers))
console.log(email.match(Space))
console.log(email.match(NotSpace))
console.log(email.match(Valid))


/* 4-
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/
let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let spam = /\Bspam|\bspam/gi
console.log(names.match(spam))
console.log(spam.test(names))

/* 5-
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));

let nums1 = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe1 = /0\d*0/ig;
console.log(nums1.match(numsRe1));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRE = /(https:\/\/)?(www.)?\w+.(com|net)/ig
console.log(urls.match(urlsRE));

/* 6-
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/
let serials = "S100S S3000S S50000S S950000S";
console.log(serials.match(/s\d{3}s/gi)) // number of numbers
console.log(serials.match(/s\d{4,5}s/gi)) // number btewenn (x, y)
console.log(serials.match(/s\d{4,}s/gi)) // number{x, >}

/*7-
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString2 = "We Love Programming";
let names1 = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";
console.log(/ing$/ig.test(myString2));
console.log(/^we/ig.test(myString2));
console.log(/lz$/ig.test(names1));
console.log(/^\d/ig.test(names1));

console.log(names.match(/\d\w{5}(?=Z)/ig));
console.log(names.match(/\d\w{8}(?!Z)/ig));

/* 8-
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
let re = /@/ig;
console.log(txt.replaceAll(re, "JavaScript"));
console.log(txt.replaceAll(/@/ig, "JavaScript"));

/* 9-
  Regular Expression
  - Input Form Validation Practice
*/

document.getElementById("register").onsubmit = function(){
  let phoneInput = document.getElementById("phone").value
  let re99 = /\(\d{4}\)\s\d{3}-\d{4}/ // (1234) 567-8910
  let Validation = re99.test(phoneInput)
  if(Validation === false){
    return false
  }
  return true;
}