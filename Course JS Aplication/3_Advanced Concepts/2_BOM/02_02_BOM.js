

/* 1-
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

/* 2-
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available(old use)
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// *three method for write alert
// window.alert("")
// this.alert("")
// alert("")

//  *confirm
// let confirmMsg = confirm("Are you sure")
// console.log(confirmMsg)
// if(confirmMsg === true){
//   console.log("Item Deleted")
// }else{
//   console.log("Item Not Deleted")
// }

// *prompt
// let PromtMsg = prompt("suitable day for you?", "write Day with 3 Charactere")
// console.log(PromtMsg)

/* 3-
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params): execute code a based time 
  - clearTimeout(Identifier): stop setTimeout
*/

// method one
// setTimeout
// setTimeout(function(){
//   console.log(`msg`)
// }, 3000)

// method two(! dik parametre kayna f methode one mdnsachi al7za9)
// setTimeout(sayMsg, 2000, "hatim", 20)
// function sayMsg(user, age){
//   console.log(`I am Message ${user} His Age Is: ${age}`)
// }

// clearTimeout: stop setTimeout

// let counter = setTimeout(sayMsg1, 2000)
// function sayMsg1() {
//   console.log(`I am Message`)
// }
// let btn = document.querySelector("button");
// btn.onclick = function(){
//   clearTimeout(counter)
// }


/* 4-
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params): Execute code based on time intervals.
  - clearInterval(Identifier)
*/

// // method 1
// setInterval(function(){
//   console.log("mgh")
// }, 3000)

// // method 2

// setInterval(time, 3000)
// function time () {
//   console.log("hhh")
// }

// // method 3
// setInterval(hatim, 3000, hatim, 90)
// function hatim(user, age) {
//   console.log(`I am Message ${user} His Age Is: ${age}`)
// }

// example

// let interval = document.getElementById("interval");
// let counter1 = setInterval(countDown, 1000)
// function countDown(){
//   interval.innerHTML -= 1;

//   if (interval.innerHTML === "0"){
//     clearInterval(counter1)
//   }
// }

/* 5-
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail] // get url website  and can manipulation
  --- host // get name website and can manipulation
  --- protocol get protocol (http or https) and can manipulation
  --- hash
  --- reload()
  --- replace(): replace page and remove history
  --- assign(): replace page and don't remove history
*/

// location.href = "/#sec02"
console.log(location.href)
// location.href = "https://hatimelbakkali.github.io/Jawlah./"  // this not deelet Href original but sotre in history
// location.href = "https://hatimelbakkali.github.io/Jawlah./pages/Tour.html#slide"

console.log(location.host)
console.log(location.hostname)

/* 6-
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target(_blank[Defaul value] or _self) Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close(): close window but when open methode(window.open( ))
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/


  // فتح نافذة جديدة
  let myWindow = window.open(
    "https://google.com", // الرابط
    "_blank",             // فتح في tab جديد
    "width=600,height=400,left=200,top=100"
  );

    // غلق النافذة
    myWindow.close();




/* 7-
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history)

/* 8-
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });

/* 9-
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

let btn = document.querySelector("button")
window.onscroll = function(){
  if(window.scrollY >= 600){
    btn.style.cssText = "display:block"
  }else{
    btn.style.cssText = "display:none"
  }
}

btn.onclick = function(){
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
}

