// if
const isUserLoggedIn = true
const temperatre = 41

// if(temperatre < 50){
//    console.log("Less then 50")
// }
// else{
//     console.log("Greater Then 50")
// }
// console.log("Execute")

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100){
//     const power = 'fly'
//     console.log(`User Power : ${power}`)
// }

// const balance = 1000

// if (balance > 500) console.log("test"),  // dont do
// console.log("test2");

// if (balance < 500){
//     console.log("less Than")
// }
// else if (balance < 750){
//     console.log("less then 750")
// }
// else if (balance < 750){
//     console.log("less then 900")
// }
// else {
//     console.log("less then 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy courses")
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In")
}