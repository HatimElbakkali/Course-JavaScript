/* Function Intro And Basic Usage */

// DRY = Don't repeat your self
// Built in function: kadkon fwst language machi nta kadira
// user defined function: nta li kdir function manual


// function + name_function (No Parametre){.....}
function SayHello() {
    // Simple Function
    console.log(`Hello Israe`);
}
SayHello();

function Sayhelo(name) {
    // name = parameter (مدخل داخل الدالة)
    console.log(`Hello ${name}`);
    // كيطبع رسالة فيها الاسم اللي دخلناه
}

// استدعاء الدالة مع تمرير قيم (arguments)
Sayhelo(`Israe`);   // argument = Israe
Sayhelo(`Bouchra`); // argument = Bouchra
Sayhelo(`Hanae`);   // argument = Hanae

/*  Function Advanced Examples */
console.log(`#`.repeat(8));

function SayHola(name, age) {
    if (age < 20) {
        console.log(`${name} app is not suitable for you`)
    }

    else {
        console.log(`Hola ${name}, Your age is ${age}`);
    }
}
SayHola(`Israe`, 9);
SayHola(`Bouchra`, 40);
SayHola(`Hanae`, 27);

function GenerateAge(start, end, exclude){
    for(let i = start; i<=end; i++){
        if (i === exclude) {
            continue;
        }
        console.log(i)
    }

    let age = end - start
    console.log(`your Age ${age}`)
}
GenerateAge(2007, 2026, 2025)


/* Function Return And Use Cases */ 
function SayHello() {
    console.log(`Hello Israe`);
}
SayHello();

function SayBonjour(userName) {
    return `Bonjour ${userName}`;
}
console.log(SayBonjour(`Hatim`));

function clac(num1, num2){
    return num1 + num2
}

console.log(clac(20, 40))

function GenerateAge(start, end) {
    for (let i = start; i <= end; i++) {
        if (i === 15) {
            return; // kadkon 3amal f7al break in loop
        }
        console.log(i)
    }
}
GenerateAge(10, 20)

/* Function Default Parameters: mli makd3tichi value n parametre ki3tik undefined fla5r nta ymnkl tl3ab fih o drj3a mnf or batata ay 7aja  */

function SayHola(name = `ma3arfchi`, age = `ma3arfchi`) {

    // methode 1
    // if(age === undefined){
    //     age = `ma3arfchi`
    // }

    // methode 2
    // age = age || `ma3arfchi`
    return `Hola ${name}, Your age is ${age}` 
}
console.log(SayHola());


/* Function Rest Parameters */

function clac(...number){
    // console.log(Array.isArray(nuumber))

    let result = 0
    for(let i = 0; i < number.length; i++){
        console.log(number[i])
        result += number[i]
    }

    return `result is ${result}`

}

console.log(clac(20, 10, 100))

/* Function Ultimate Practice */



/* Challenge */

function ShowDetails(a, b, c) {
    info = [a, b, c]
    for (let i = 0; i < info.length; i++) {
        typeof info[i] === "string" ? (a = info[i])
            : typeof info[i] === "number" ? (b = info[i])
                : typeof info[i] === "boolean" ? (c = info[i] ? "you are Available for Hire" : "you are Not Available for Hire")
                    : null;
    }
    console.log(`Hello ${a}, Your Age Is ${b}, ${c}`)
}
ShowDetails(`hatim`, 38, true)
ShowDetails(38, `hatim`, true)
ShowDetails(false, 38, `hatim`)
ShowDetails(false, `hatim`, 38)