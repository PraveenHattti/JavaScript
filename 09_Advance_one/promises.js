// #1

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptograph, network
    setTimeout(function(){
        console.log('Asynk task is completed')
        resolve()
    },1000)
})


promiseOne.then(function(){
    console.log("promise consumed")
})

// #2

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved')
})



// #3


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Praveen", email:"praveenhatti267@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

// #4

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Praveen", password:'12345'})
        }else{
            reject('Error: Something went Wrong')
        }
    },1000)
})

 promiseFour.then((user)=>{
    console.log(user);
    return user.username
} ).then((username) =>{
    console.log(username)
}).catch(function(error){
   console.log(error)
}).finally(() => console.log('The Promise is either resolved or rejected'))

// #5

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JavaScript", password:'12345'})
        }else{
            reject('Error: JS went wrong')
        }
    },1000)
})


  async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response)
   } catch (error) {
     console.log(error)
   }
  }

  consumePromiseFive()

//   #6


//   async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E : ", error)
//     }

//   }

//   getAllUsers()


// #7

fetch('https://api.github.com/users/PraveenHattti')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) =>{
   console.log(error)
})



  //https://jsonplaceholder.typicode.com/users



