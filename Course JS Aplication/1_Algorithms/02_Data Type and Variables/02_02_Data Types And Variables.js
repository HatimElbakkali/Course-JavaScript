/* Data type */

// string
console.log("hatim");

// number
console.log(typeof 33);

// array or object or list
console.log(typeof [10, 20, 30, 40]);

// array or object or list
console.log(typeof ["alae", "hodayfa", 60, true]);

// Hashtable or object
console.log(typeof { name: "hatim", school: "ista", id: 1337 });

// boolean
console.log(typeof false);
console.log(typeof true);

// undefined
console.log(undefined);

// null
console.log(null);

/* Variable */

// key + variavle name = "hatim"

// var name = "hatim";
// console.log(name);
//   age = 18;

// var school = "ista";
// console.log(school);
// console.log(age);

/* namming variable */

// It must start with a letter or _ or $
// let name;
// let _age;
// let $price;

var name_st = "hatim"; // underscore
// or
// var NameSt = "hatim"  uppercase
console.log(name_st);

/* string syntax and escape */

// double quotes in single quote
console.log("hatim is 'stupid' ");

// single quote in double quotes
console.log('mohamed is "hero"');

// escape   \"lazy\"
console.log('morad is "lazy"');
console.log("hatim\\is 'teacher'"); // so print /

console.log("hatim\nbatata\nyt"); // so new line

// tab
console.log("hatim\t teacher"); // so espace

// unicode
console.log("\u2764"); // emoji

/* concatonation */

let a1 = "mohamed";
let b1 = "abdo";
document.writeln(a1 + " " + b1);
console.log(a1, b1);


/* Template literals */

// old method
let a2 = "we love"
let b2 = "JS"
let c2 = "And"
let d2 = "programming"
console.log(a2 + " " + b2 + 
" \n" + c2 + " " + d2 )

// new method (Template literals)
console.log(`${a2} ${b2} ${c2} ${d2}`);
console.log(`I'am ${9*2} old`)


// // EX

let Title =`JavaScript`
let Desc = `Langauge programming`

let mark =`
    <div class= "card">
        <h1> ${Title} </h1>
        <p1> ${Desc} </p1>
    </div>
`
document.writeln(mark)


let title_card = `Elzero`
let desc_card = `Elzero web school`
let date_card = `25/10`
let repate = 4

let container =`
    <div class="container">
        <h3>${title_card}</h3>
        <p> ${desc_card}</p>
        <span> ${date_card}</span>
    </div>
`
document.writeln(container.repeat(4))

