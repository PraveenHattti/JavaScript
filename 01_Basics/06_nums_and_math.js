const score = 400;
console.log(score);  // 400

const balance = new Number(100.3456);
console.log(balance); // [Number: 100]

// // toString
console.log(balance.toString()); // 100.3456
console.log(balance.toString().length); // 8
console.log(typeof(balance)); // object

// // toFixed

console.log(balance.toFixed(2)); // 100.35 after point two digits

// // Precision

const otherNumber = 123.6754;
console.log(otherNumber.toPrecision(4));  // 123.7

// // toLocalString

const hundreds = 1000000;
console.log(hundreds); // 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10, 00, 000



// +++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);  // object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.round(2, 5, 6, 22, 45)); // 2


console.log(Math.random()); // randum values

console.log(Math.floor(Math.random()*10) + 1); 


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);











