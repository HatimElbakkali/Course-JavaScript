// 1-

let fonts = document.querySelector("#fonts");
let colors = document.querySelector("#colors");
let sizes = document.querySelector("#sizes");
let text = document.querySelector(".text");

// font
fonts.value = localStorage.getItem("font") || "Open Sans";
text.style.fontFamily = fonts.value;
fonts.addEventListener("change", function () {
    // text.style.cssText = `font-family:${fonts.value}; color:${colors.value}; font-size: ${sizes.value}; `;
    text.style.fontFamily = fonts.value;
    localStorage.setItem("font", fonts.value);

});

// colors
colors.value = localStorage.getItem("color") || "black";
text.style.color = colors.value 
colors.addEventListener("change", function () {
    // text.style.cssText = `color:${colors.value}; font-size: ${sizes.value}; font-family:${fonts.value}`;

    // the bset
    text.style.color = colors.value;
    localStorage.setItem("color", colors.value)
});

// sizes

sizes.value = localStorage.getItem("size") || "16px"
text.style.fontSize = sizes.value
sizes.addEventListener("change", function(){
    // text.style.cssText = `font-size: ${sizes.value}; color:${colors.value} ; font-family:${fonts.value}`
    text.style.fontSize = sizes.value;
    localStorage.setItem("size", sizes.value)
})

// 2-

let Name = document.querySelector("#name")
let email = document.querySelector("#email")
let age = document.querySelector("#age")
let skills = document.querySelector("#skills")

// get value when load page 
Name.value = sessionStorage.getItem("name") || "";
email.value = sessionStorage.getItem("email") || "";
age.value = sessionStorage.getItem("age") || "";
skills.value = sessionStorage.getItem("skills") || "";

Name.addEventListener("input", function(){
    sessionStorage.setItem("name", Name.value)
})
email.addEventListener("input", function(){
    sessionStorage.setItem("email", email.value)
})
age.addEventListener("input", function(){
    sessionStorage.setItem("age", age.value)
})
skills.addEventListener("input", function(){
    sessionStorage.setItem("skills", skills.value)
})