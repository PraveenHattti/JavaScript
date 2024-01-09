const name = "hitesh";
const repocount = 50;

console.log(name + repocount + "  value");

// String Interpolation

console.log(`Hello My name is ${name} and my repo count is ${repocount}`);

const gameName = new String('Praveen-BH')

console.log(gameName[0]);  // P
console.log(gameName.__proto__); // {}
console.log(gameName.length);  // 10
console.log(gameName.toUpperCase()); // PRAVEENBH
console.log(gameName.charAt(3)); // v
console.log(gameName.indexOf('v')); //3

// substring
const newString = gameName.substring(0, 4); // 3 letter will come
console.log(newString); // Prav

//  Slice
const anotherString = gameName.slice(-9, 4);
console.log(anotherString);

// Trim

const newStringOne = "  praveen    ";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());

// replace

const url = "http://praveen.com/praveen%20hatti";
console.log(url.replace('%20', '-')); // http://praveen.com/praveen-hatti

// includes

console.log(url.includes('praveen')); // true

// split

const newGame = new String('Prveen-BH-DEV');
console.log(newGame.split('-')); // [ 'Prveen', 'BH', 'DEV' ]

