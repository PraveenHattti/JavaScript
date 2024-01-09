// console.log("H")
// console.log("I")
// console.log("T")
// console.log("E")
// console.log("S")
// console.log("U")

function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("U")
}

sayMyName()  // mumber1 number2 are parametars and 3 and null are arguments,

function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result

    return number1 + number2
    
}
const result = addTwoNumbers(3, 8)

console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
 console.log(loginUserMessage("Praveen"))
console.log(loginUserMessage())

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Praveen"))
console.log(loginUserMessage())

function loginUserMessage(username = "Vinod"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Praveen"))
console.log(loginUserMessage())


function calculateCartPrice(...num1){   // rest operator
    return num1
}

function calculateCartPrice(val1, val2,  ...num1){   // rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 700))  //  [ 200, 400, 500, 700]


const user = {
    username: "Praveen",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
console.log(handleObject(user))

console.log(handleObject({
    username: "sam",
    price: 200
}))

const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,4600,600,1000]));









