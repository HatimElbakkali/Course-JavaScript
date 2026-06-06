/* 1- Arithmetic_operator */

// + Addition
console.log(20 + 10);
console.log(10 + `hatim`); // 10hatim

// - substract
console.log(20 - 10);
console.log(10 - `hatim`); // Nan Not a number

// * Multiplaction
console.log(20 * 10);
console.log(20 * -10);

// / devision
console.log(20 / 10);
console.log(20 / 3);

// exponontion
console.log(4 ** 2);

// % Module
console.log(20 % 10);

// Post-decrement: 1 decreases but only after it returns the value
let x = 5;
console.log(x--);
console.log(x);

// Pre-decrement: 1 decreases but it returns the value Now
let y = 5;
console.log(--y);

/* 2- Unary Plus And Negation Operators */

// Unary Plus
console.log(+"90"); //90
console.log(+"-90"); //-90
console.log(+"hatim"); //NaN
console.log(+true); // 1
console.log(+false); //0
console.log(+null); //0
console.log(+0xff); //hex

// Unary Negation
console.log(-"90");//-90
console.log(-"-90");//90
console.log(-"hatim");//NaN
console.log(-true);//-1
console.log(-false);//-0
console.log(-null);//-0
console.log(-0xff); //hex

// add info

console.log(Number("999999999"));

/* 3- Type Coercion (automatic) */

let a = "36";
let b = 6;
let c = true;
let d = false;
console.log(a / b); // 6
console.log(a - b); // 30
console.log(a * b); // 216
console.log(b + c); // 7
console.log(b + d); // 6
console.log(+a + b + c); // 43

/* 4- Assignment Operators */

let h = 10;
h += 100;//110
h -= 10;//100
h /= 10;//10

console.log(h);

/* challenge 1 */

let a1 = 10;
let b1 = "20";
let c1 = 80;

// first
console.log(++a + +b++ + +c++ - +a++);  // 102 if 2 add(pre increment) or 100 

/* 

[++a]

    Value = 11
    Explain = pre-increment operator
    [+] = "add operator"

[+b++]
    Value = 20 => 21
    Explain = Post-increment (print of it add 1) operator and unary plus
    [+] = "add operator"

[+c++]
    Value = 80 => 81
    Explain = Post-increment (print of it add 1) operator and unary plus
    [-] = "substract operator"

[+a++]
    Value = 10 => 11
    Explain = Post-increment (print of it add 1)  and unary plus
*/

// seconde

let a2 = 10;
let b2 = "20";
let c2 = 80;

console.log(++a + -b + +c++ - -a++ + +a); // 71 if 2 add(pre increment) or 69

/*
[++a]

    Value = 11
    Explain = pre-increment operator
    [+] = "add operator"

[-b]

    Value = -20
    Explain = unary Negation
    [+] = "add operator"

[+c++]

    Value = 80 => 81
    Explain = Post-increment (print of it add 1) and unary plus
    [-] = "substract operator"

[-a++]

    Value = -10 => -11
    Explain = Post-increment (print of it add 1) and unary Negation
    [+] = "add operator"

[+a]

    Value = 10
    Explain = unary plus
*/

let a3 = 10;
let b3 = "20";
let c3 = 80;

console.log(--c + +b + --a * +b++ - +b * a + --a - +true); //89

/*
[--c]

    Value = 79
    Explain = pre-decrement operator
    [+] = "add operator"

[+b]

    Value = 20
    Explain = unary plus
    [+] = "add operator"

[--a]

    Value = 9
    Explain = pre-decrement operator
    [*] = "Multiplaction operator"

[+b++]

    Value = 20 => 21
    Explain = post-increment operator and unary plus
    [-] = "substract operator"

[+b]

    Value = 20 
    Explain =  unary plus
    [*] = "Multiplaction operator"

[a]

    Value = 10 
    Explain =  unary plus
    [+] = "add operator"

[--a]

    Value = 9 
    Explain =  pre-decrement operator
    [-] = "substract operator"

[+true]

    Value = 1
    Explain =  unary plus
*/

let w = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(-w * +e); //2000
console.log(++e * ++g + -w + ++f); //173
