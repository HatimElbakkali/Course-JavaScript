
// 1-

let birthday = new Date("2007-09-29");
let dateNow = new Date()
let Time = dateNow - birthday
let seconde = Time / 1000
console.log(`Seconde ${seconde}`) // seconde
let minute = seconde / 60
console.log(`Minutes ${minute}`) // Minutes
let hours = minute / 60
console.log(`hours ${hours.toFixed(0)}`) // hours
let day = hours / 24
console.log(`day ${day.toFixed(0)}`) // day
let month = day / 31;
console.log(`month ${month.toFixed(0)}`) // month
let year = day / 365
console.log(`year ${year.toFixed(0)}`) //year

// 2-
let dateNow1 = new Date(0);
dateNow1.setFullYear(1980)
dateNow1.setHours(0, 0, 1)
console.log(dateNow1)

// 3-
let dateNow2 = new Date();
dateNow2.setDate(1);
dateNow2.setHours(0, 0, 0, 0);
dateNow2.setSeconds(-1);
console.log(dateNow2);

console.log(
    `Previous Month Is ${dateNow2.toLocaleString("en-US", {
        month: "long",
    })} And Last Day Is ${dateNow2.getDate()}`
);

// 4-
// methode 1
let dateNow3 = new Date("Mon Oct 25 1982 00:00:00")
console.log(dateNow3)

// methode 2
let dateNow4 = new Date()
dateNow4.setFullYear(1982, 9, 25)
dateNow4.setHours(0, 0, 0)
console.log(dateNow4)

// methode 3
let dateNow5 = new Date();
dateNow5.setMonth(-519, 25)
dateNow5.setUTCHours(0, 0, 0)
console.log(dateNow5);

// 5-

let start = performance.now()

// for (let i = 0; i < 99999; i++){
//     document.writeln(i)
// }

let end = performance.now()
let result = end - start
console.log(result / 1000)

// 6-

function* gen() {
    let value = 14; 
    let inc = 140; 

    while (true) {
        value += inc;
        yield value;
        inc += 200; 
    }
}
let generator = gen();
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

// 7-

function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll(){

    let Numbers = [...genNumbers()];
    yield* new Set(Numbers);
    let Letters = [...genLetters()];
    yield* new Set(Letters)
}
let generator1 = genAll();
console.log(generator1.next()); // {value: 1, done: false}
console.log(generator1.next()); // {value: 2, done: false}
console.log(generator1.next()); // {value: 3, done: false}
console.log(generator1.next()); // {value: 4, done: false}
console.log(generator1.next()); // {value: 5, done: false}
console.log(generator1.next()); // {value: "A", done: false}
console.log(generator1.next()); // {value: "B", done: false}
console.log(generator1.next()); // {value: "C", done: false}
console.log(generator1.next()); // {value: "D", done: false}

// 8-

// 5arjto