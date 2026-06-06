
// 1- drto f srcript o 5dm
// let urlh = document.links;
// for (let i = 0; i < urlh.length; i++) {
//     if (urlh[i].classList.contains("open") && urlh[i].innerHTML == "Elzero") {
//         window.onload = function () {
//             let urlhRare = document.links[1]
//             window.location.href = "https://elzero.org"
//         }
//     }
// }

// 3-

// remove
let myP = document.getElementById("my-p")
myP.remove()

// Moyen
let moyen = document.getElementsByClassName("our-element")[0]

// add element Before
let my_div1 = document.createElement("div")
let TextMy_div1 = document.createTextNode("Start")
my_div1.className = "Start"
my_div1.setAttribute("title", "Start Element")
my_div1.setAttribute("data-value", "Start")
my_div1.appendChild(TextMy_div1)
document.body.appendChild(my_div1);
moyen.before(my_div1)

// add element After
let my_div2 = document.createElement("div")
let TextMy_div2 = document.createTextNode("end")
my_div2.className = "end"
my_div2.setAttribute("title", "end Element")
my_div2.setAttribute("data-value", "end")
my_div2.appendChild(TextMy_div2)
document.body.appendChild(my_div2);
moyen.after(my_div2)

// 4-

let my_div21 = document.getElementById("my-div")
console.log(my_div21.childNodes[2].nodeValue) // Elzero
// console.log(my_div21.tagName)
// console.log(my_div21.nodeName)


// 5-

let type = document.getElementsByClassName("Type");
for(let i=0; i<type.length;i++){
    type[i].onclick = function () {
        console.log(`This Is ${type[i].nodeName}`)
    }
}