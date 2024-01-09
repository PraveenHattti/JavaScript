// Immediately Invoked Function Expression

(function chai(){
    // named iife is it has name as chai
    console.log(`DB CONNECTED`)
})();


((name) => {
    // unnames iife
    console.log(`DB CONNECTED TWO ${name}`)
 })(`praveen`)
 

 // JAVASCRIPT EXECUTE CONTEXT
//  --> Global EXECUTE CONTEXT 
// --> Function EXECUTE CONTEXT 
// --> Eval EXECUTE CONTEXT

// how does code execute in javascript

// (code)
// In two face it will ren 
// 01) Memory Creation phase or Creation Phase  (memory allocation)
// 02) Execution Phase 

// example code 

// let vav1 = 10
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }

// let result = addNum(val1, val2)
// let result2 = addNum(10,2)

// 01) Global Execution its allocate on this 
// 02) memory phase (val1 val2 initial undefined) (addNum will store defination)

// result1 also undefined and result2 aswell

// above is first first cycle

// second cycle execution phase

// val1 =10  val2=5   addNum = nothing
// addNum will crate another Execution Context --> new variable environment execution thread
//  repeats memery creation phase and execution phase

// on function 

// Memory phase 

// val1 = undefined
// val2 = undefined 
// total = undefined

//  Execution context 

// num1 = 10
// num2= 5
// total=15 ---> return to Global Execution context 

// it will detete once execute

// result1 =15

// result2 same method for this (new variable environment) same text


// CALL STACK 

// function under function (Lifo concept run here last in first out)











