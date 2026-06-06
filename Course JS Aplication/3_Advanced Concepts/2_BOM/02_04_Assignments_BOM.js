
// 2-

let POP = document.querySelector(".POP")
let rectangle = document.querySelector(".rectangle")
let circle = document.querySelector(".circle")
POP.addEventListener("click", function(){
    setTimeout(function(){
        rectangle.style.cssText = "display: block;"
        circle.style.cssText = "display: block;"
    }, 5000)
    circle.addEventListener("click", function(){
        rectangle.remove()
        circle.remove()
    })
})
// setTimeout(function(){
//     rectangle.style.cssText = "display: block;"
//     circle.style.cssText = "display: block;"
//     circle.addEventListener("click", function () {
//         rectangle.remove()
//         circle.remove()
//     })
// }, 5000)

// 3-

// let counter = document.getElementById("counter")
// let countDown1 = setInterval(countDown, 1000)
// function countDown(){
//     counter.innerHTML -= 1;
//     if(counter.innerHTML === "0"){
//         clearInterval(countDown1)
//     }
// }

// 4-

// let counter = document.getElementById("counter")
// let countDown1 = setInterval(countDown, 1000)
// function countDown() {
//     counter.innerHTML -= 1;
//     if (counter.innerHTML === "0") {
//         window.location = "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/"
//     }
// }

// 5-

// let counter = document.getElementById("counter")
// let countDown1 = setInterval(countDown, 1000)
// function countDown() {
//     counter.innerHTML -= 1;
//     if (counter.innerHTML === "5") {
//         window.open("https://elzero.org/", "_blank", "width: 300px, height: 150px")
//     }
//     else if (counter.innerHTML === "0"){
//         clearInterval(countDown1)
//     }
// }

