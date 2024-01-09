// singleton
// object.create

// object literals

const mysym = Symbol("key1");

const JsUser = {
    name: "Praveen",
    "full name": "Praveen Hatti",
    age: 28,
    [mysym]: "mykey1",
    location:"Bengaluru",
    email:"praveenhatti267@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "saturday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]); // both are same
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);
console.log(typeof(JsUser[mysym]));

JsUser.email = "praveenalpha@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "test@123.com";
console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingTwo());