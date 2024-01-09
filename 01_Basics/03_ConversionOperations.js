let score = null

console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(typeof(valueInNumber));
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "Praveen";

let bolleanIsLoggedIn = Boolean(isLoggedIn);
console.log(bolleanIsLoggedIn);

// 1 => true 0=> false
// "" => false
// "string" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));



// *********************************************   Operations   ****************************************

let value  = 3;
let negvalue = -value;
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " praveen";
let str3 = str1 + str2;
// console.log(str3);

console.log("1" + 2);
console.log(2 + "1");
console.log(1 + 2 + "3");

console.log(true);   // true
console.log(+true);  // 1
// console.log(true+); // error
console.log(+"");  // 0



let gameCounter = 100;
gameCounter++
console.log(gameCounter);   // 101

let playCounter = 100;
++playCounter;
console.log(playCounter);