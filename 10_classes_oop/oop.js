// object litaral

const user ={
    username:"hitesh",
    loginCount:8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database")
        // console.log(`username: ${this.username}`)
           console.log(this)

    }
}
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


// Constroctor function  -- creat new context

// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("hitesh",12,true)
const userTwo = new User("praveen", 11, false)
console.log(userOne.constructor)
// console.log(userTwo)
