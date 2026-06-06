// 1-
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let re2 = /\d{4}:\w{2}\w{1}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig
let re3 = /\d{4}:\w{2}\w{1}:(\d{4}:){5}\d{4}/ig
console.log(ip.match(re3))
// 2-
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let re = /os(\d{2,3})?o/ig;
console.log(specialNames.match(re))

// 3-
let phone = "+(995)-123 (4567)";
let re1 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig
console.log(phone.match(re1))

// 5-
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re100 = /\d{2}(\/)?(\s-\s)?(\s)?\d{2}(\/)?(\s-\s)?(\s)?\d{2}/ig
console.log(date1.match(re100)); // "25/10/1982"
console.log(date2.match(re100)); // "25 - 10 - 1982"
console.log(date3.match(re100)); // "25 10 1982"
console.log(date4.match(re100)); // "25 10 82"

// 6-
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re44 = /(https:\/\/)?(www.)?\w+.org(:\d{4}\/\w+.\w{3}\?\w{2}=\d{3}&\w{3}=\w+)?/ig
console.log(url1.match(re44));
console.log(url2.match(re44));
console.log(url3.match(re44));
console.log(url4.match(re44));
console.log(url5.match(re44));