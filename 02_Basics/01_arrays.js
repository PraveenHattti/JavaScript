// arrays 

const myArr = [0, 1, 2 ,3 ,4 ,5]  // 0 to 5 elements  // shollow copy // deep copy
const myHers = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[0]); // 0

// Array Methods

myArr.push(6);
console.log(myArr)
myArr.push(7); // Add new Element
console.log(myArr)
myArr.pop()  // Removes Last Element
console.log(myArr)


myArr.unshift(9); // inserts at starts
console.log(myArr)


myArr.shift()  //Removes first element
console.log(myArr)


console.log(myArr.includes(9)); // False
console.log(myArr.indexOf(4));  // 4

const newArr = myArr.join(); // joins two arr and return string type

console.log(myArr); 
console.log(newArr);
console.log(typeof(newArr));

// slice, splice

console.log("A ", myArr);


const myn1 = myArr.slice(1, 3); // shows the related index elemrnt 

console.log(myn1); // [1, 2]
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); // removes related index element
console.log("C", myArr);

console.log(myn2);





