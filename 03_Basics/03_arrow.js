const user={
    username: "Praveen",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()  // Praveen, Welcome to website

user.username = "Vishal"
user.welcomeMessage() // Vishal, Welcome to website

console.log(this) // {} emty object


// function chai(){
//     let username = "Abhi"
//     console.log(this.username)   // we cant use this in fucntion
// }
// chai()


const chai = () => {
     let username = "Vinod"
     console.log(this)
}

chai()  // {}


const addTwo= (num1, num2) => {
    return num1 + num2
}

// anotherway its called implisit return 
const addTwoe= (num1, num2) => num1 + num2
const addTwoo= (num1, num2) => (num1 + num2)

// if we wanr to return object 

const addTwooo= (num1, num2) => ({username:"praveen"})


console.log(addTwo(2, 9))
