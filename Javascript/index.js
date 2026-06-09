// let a = ["HTML", "CSS", "JS", "React"];
// console.log(a.length);
// let s = a.toString();
// console.log(s);
// console.log(a.join("-----"));

// let a1 = [11, 12, 13];
// let a2 = [14, 15, 16];
// let a3 = [17, 18, 19];

// let newArr = a1.concat(a2, a3);
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// arr.push(5);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// console.log(arr);

let arr = [1, 2, 3, 4, 5];

console.log("Original:", arr);

arr.push(6);
console.log("push:", arr);

arr.pop();
console.log("pop:", arr);

arr.unshift(0);
console.log("unshift:", arr);

arr.shift();
console.log("shift:", arr);

console.log("length:", arr.length);

console.log("indexOf(3):", arr.indexOf(3));

console.log("includes(4):", arr.includes(4));

let arr2 = [6, 7, 8];
console.log("concat:", arr.concat(arr2));

console.log("join:", arr.join("-"));

let rev = [...arr];
rev.reverse();
console.log("reverse:", rev);

let unsorted = [5, 2, 8, 1, 9];
unsorted.sort((a, b) => a - b);
console.log("sort:", unsorted);

console.log("slice:", arr.slice(1, 4));

let spliceArr = [...arr];
spliceArr.splice(1, 2);
console.log("splice:", spliceArr);

let fillArr = [1, 2, 3, 4];
fillArr.fill(0);
console.log("fill:", fillArr);

arr.forEach((num) => console.log("forEach:", num));

console.log(
  "map:",
  arr.map((num) => num * 2),
);

console.log(
  "filter:",
  arr.filter((num) => num % 2 === 0),
);

console.log(
  "find:",
  arr.find((num) => num > 3),
);

console.log(
  "findIndex:",
  arr.findIndex((num) => num > 3),
);

console.log(
  "every:",
  arr.every((num) => num > 0),
);

console.log(
  "some:",
  arr.some((num) => num > 4),
);

console.log(
  "reduce:",
  arr.reduce((acc, curr) => acc + curr, 0),
);

let nested = [1, [2, 3], [4, [5]]];
console.log("flat:", nested.flat());

console.log(
  "flatMap:",
  arr.flatMap((x) => [x, x * 2]),
);

console.log("Array.from:", Array.from("hello"));

console.log("Array.isArray:", Array.isArray(arr));

console.log("at(-1):", arr.at(-1));

let str = "Hello World";

console.log("Original:", str);

console.log("length:", str.length);

console.log("charAt(1):", str.charAt(1));

console.log("at(-1):", str.at(-1));

console.log("indexOf('o'):", str.indexOf("o"));

console.log("lastIndexOf('o'):", str.lastIndexOf("o"));

console.log("includes('World'):", str.includes("World"));

console.log("startsWith('Hello'):", str.startsWith("Hello"));

console.log("endsWith('World'):", str.endsWith("World"));

console.log("toUpperCase():", str.toUpperCase());

console.log("toLowerCase():", str.toLowerCase());

console.log("slice(0,5):", str.slice(0, 5));

console.log("substring(0,5):", str.substring(0, 5));

console.log(
  "replace('World','JavaScript'):",
  str.replace("World", "JavaScript"),
);

console.log("replaceAll('l','L'):", str.replaceAll("l", "L"));

console.log("split(' '):", str.split(" "));

console.log("concat():", str.concat("!!!"));

console.log("repeat(3):", str.repeat(3));

console.log("trim():", "   Hello   ".trim());

console.log("trimStart():", "   Hello".trimStart());

console.log("trimEnd():", "Hello   ".trimEnd());

console.log("padStart(15,'*'):", str.padStart(15, "*"));

console.log("padEnd(15,'*'):", str.padEnd(15, "*"));

console.log("search('World'):", str.search("World"));

console.log("match(/o/g):", str.match(/o/g));

console.log("localeCompare('Hello'):", str.localeCompare("Hello"));

console.log("valueOf():", str.valueOf());

console.log("String.fromCharCode(65):", String.fromCharCode(65));

// function token() {
//   setTimeout(() => {
//     console.log("Token Taken");
//   }, 1000);
// }

// function counter() {
//   setTimeout(() => {
//     console.log("Went to counter");
//   }, 2000);
// }

// function Ordered() {
//   setTimeout(() => {
//     console.log("Got the order");
//   }, 1000);
// }

// function deliveredOrder() {
//   setTimeout(() => {
//     console.log("Order delivered sucessfully");
//   }, 4000);
// }

// function main() {
//   token();
//   counter();
//   Ordered();
//   deliveredOrder();
// }

// main();

// function token(callback) {
//   setTimeout(() => {
//     console.log("Token Taken");
//     callback();
//   }, 1000);
// }

// function counter(callback) {
//   setTimeout(() => {
//     console.log("Went to counter");
//     callback();
//   }, 2000);
// }

// function Ordered(callback) {
//   setTimeout(() => {
//     console.log("Got the order");
//     callback();
//   }, 1000);
// }

// function deliveredOrder() {
//   setTimeout(() => {
//     console.log("Order delivered sucessfully");
//   }, 4000);
// }

// token(() => {
//   counter(() => {
//     Ordered(() => {
//       deliveredOrder();
//     });
//   });
// });
