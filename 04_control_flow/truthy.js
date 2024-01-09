const userEmail = []

if (userEmail){
    console.log("Got user Email")
}
else{
    console.log("Don't have user email")
}

// flasy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'flase', " ", [], {}, function(){}

if(userEmail.length === 0){
   console.log("Array is empty")
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
    console.log("Object is empty")
}



// Nullish Coalescing Operatoe (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

// Ternary operator

// condition ? true : flase

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less Then 80") : console.log("More Then 80")








