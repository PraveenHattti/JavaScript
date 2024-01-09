// Primitive
// 7 types : String , Nuber , Boolean, Null, Undefined, Symbol, BigInt

// Refrence Type OR Non primitive Data Types

// Array, Objects, Functions

const heros = ["shaktiman", "Nagraj", "doga"]; // Array

let myObj = {              // Object
    name : "praveen",
    age : 27,
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof(heros));  // Array
console.log(typeof(myObj));  // object
console.log(typeof(myFunction)); // function



// ***********************************************************************************************************

// stack (primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchodarydoycom";

let anothername = myYoutubename;

anothername = "Chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let personone = {
    Email: "praveen@123.com",
    Password:12345
}

let persontwo = personone;

persontwo.Email = "praveenhatti267@gmail.com"

console.log(personone);
console.log(persontwo);