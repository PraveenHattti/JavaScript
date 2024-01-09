
// Prototype

// let myName = "Praveen     ";

// console.log(myName.truelength());


let myHeros = ["thor", "spiderman"]

let heroPower={
    thor : 'Hammer',
    spiderman : "sling",
    
    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.praveen = function(){
    console.log(`praveen is present in all objects`)
}

Array.prototype.heyPraveen = function(){
    console.log(`Praveen Says Hello`)
}

// heroPower.praveen()

myHeros.praveen()
myHeros.heyPraveen()
// heroPower.heyPraveen()


// inheritance

const user = {
    name: "chai",
    email:'chai@google.com'
}

 const teacher = {
    makeVideo: true
 }

 const teachingSupport = {
    isAvailable: false
 }

 const TASupport ={
    makeAssignement:'JS assignment',
    fulltime:true,
    __prto__: teachingSupport
 }

 teacher.__proto__ = user


 // modern syntax

 Object.setPrototypeOf(teachingSupport, teacher)


 let mango = "mangos        ";

 String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True legth is: ${this.trim().length}`)
    
 }
 mango.trueLength()
 "Nagavva   ".trueLength()
 "icetea  ".trueLength()
