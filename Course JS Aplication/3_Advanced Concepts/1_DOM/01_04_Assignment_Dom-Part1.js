// 1-
console.log(document.getElementsByTagName("div")[0])
console.log(document.getElementsByClassName("element")[0])
console.log(document.getElementById("elzero"))
console.log(document.getElementsByName("js")[0])
console.log(document.querySelector(".element"))
console.log(document.querySelector("#elzero"))
console.log(document.querySelector("div"))
console.log(document.querySelector('[name="js"]'))
console.log(document.querySelectorAll(".element")[0])
console.log(document.querySelectorAll("#elzero")[0])
console.log(document.querySelectorAll("div")[0])
console.log(document.querySelectorAll('[name="js"]')[0])
console.log(document.body.firstElementChild); //New
console.log(document.body.children[0]); //New
console.log(document.all["elzero"]) //New

// 2-

// for (let i = 0; i < 10; i++){
//     document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//     document.images[i].alt = "Elzero Logo"
// }

// 3-

let TypeNumber = document.querySelector('[name = "dollar"]');
let TextConvert = document.getElementsByClassName("result")[0];

TypeNumber.addEventListener("input", function(){
    let dollarValue = parseFloat(TypeNumber.value);
    if(TypeNumber.value === ""){
        TextConvert.innerHTML = "";
    }
    else{
        let EgyptValue = (dollarValue * 15.6).toFixed(2);
        TextConvert.innerHTML = `${dollarValue} Dollar = ${EgyptValue} Egyptian Pound`

    }
})


// 4-

let one = document.querySelector(".one");
let two = document.querySelector(".two")
let PrintOne = document.createTextNode("one")
let Printwo = document.createTextNode("Two 2")
one.textContent = ""
two.textContent = ""
one.setAttribute("title", "one")
two.setAttribute("title", "two")
oneText = one.appendChild(PrintOne)
two.appendChild(Printwo)

// 5- 
let images = document.getElementsByClassName("image5")
for (let i = 0; i < images.length; i++) {
    if (document.images[i].alt === "One" || document.images[i].alt === "Three") {
        document.images[i].alt = "Old"
    }
    else if (document.images[i].alt === "") {
        document.images[i].alt = "Elzero New"
    }
}

// 6- drta