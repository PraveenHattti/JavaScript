// const tinderUser = new Object() // singontn object

const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: '123abc', name: 'sammy', isLoggedIn: false }

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Praveen",
            lastname:"Hatti"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // Praveen

 const obj1 ={1:"a", 2:"b"}
 const obj2 ={3:"a", 4:"b"}

 const obj3 = {obj1, obj2}

 console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2)  // {} optinal to add this symbol
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// spred operator
// const obj3 = {...obj1, ...obj2}
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
    id:1,
    email:"p@gmail.com"
    },
    {
        id:2,
        email:"g@gmail.com"
        }
]
console.log(users[1].email);

console.log(tinderUser)

console.log(Object.keys(tinderUser)) // returns Key 
console.log(Object.values(tinderUser)) // Return Values
console.log(Object.entries(tinderUser)) // Return both keys ans values

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // Is there or not



const course = {
    coursename: "Js In Hindi",
    price: "999",
    courseInstructor:"Hitesh"
} 

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor)


// About API's 

// {
//     "name":"Hitesh",
//     "coursename":"js In hindi",
//     "price":"free"

// } 

// https://randomuser.me/   https://jsonformatter.org/

// [
//     {},
//     {},
//     {}
// ]








