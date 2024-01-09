class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    static creatId(){
        return `123`
    }

}

const pavee = new User('pavee')
// console.log(pavee.creatId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email

    }
}

const iphone = new Teacher("iphone", "I@phone.com")
console.log(iphone.creatId())

