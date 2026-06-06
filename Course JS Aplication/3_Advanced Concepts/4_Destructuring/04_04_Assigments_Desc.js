
// 1-
let myNumbers = [1, 2, 3, 4, 5];
let [a, , , , e] = myNumbers ;
console.log(a * e); // 5

// 2-
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
let  [a1, b, c, [d, e1, [f, g]]]=mySkills ;
console.log(`My Skills: ${a1}, ${b}, ${c}, ${d}, ${e1}, ${f}, ${g}`);// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// 3-

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let Friends = arr3.concat(arr1)
let [, a2, b2, c2] = Friends ;
console.log(`My Best Friends: ${a2}, ${b2}, ${c2}`);

// 4-
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};
const  {
    age: a3,
    working: w,
    country: c3,
    hobbies: [h1, ,h3],
}=member ;
console.log(`My Age Is ${a3} And Iam ${w ? "" : "Not"} Working`); // My Age Is 30 And Iam Not Working
console.log(`I Live in ${c3}`); // I Live in Egypt
console.log(`My Hobbies: ${h1} And ${h3}`); // My Hobbies: Reading And Programming

// 5-
const game = {
    title: "YS",
    developer: "Falcom",
    releases: {"Oath In Felghana": ["USA", "Japan"],"Ark Of Napishtim": {US: "20 USD",JAP: "10 USD",},
        Origin: "30 USD",
    },
};
const  {
    title: t,
    developer: d9,
    releases: { "Oath In Felghana": [u, j], "Ark Of Napishtim": {US: u_price, JAP: j_price,},Origin: or,},
}=game ;

const [o, a9] = Object.keys(game.releases);
console.log(`My Favourite Games Style Is ${t} Style`); // My Favourite Games Style Is YS Style
console.log(`And I Love ${d9} Games`); // And I Love Falcom Games
console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`); // My Best Release Is Oath In Felghana It Released in USA & Japan
console.log(`Although I Love ${a9}`); // Although I Love Ark Of Napishtim
console.log(`${a9} Price in USA Is ${u_price}`); // Ark Of Napishtim Price in USA Is 20 USD
console.log(`${a9} Price in Japan Is ${j_price}`); // Ark Of Napishtim Price in Japan Is 10 USD
console.log(`Origin Price Is ${or}`); // Origin Price Is 30 USD
