class User {
    constructor(username){
       this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
         
    }

  
}

const chai = new Teacher("chai", "chai@gmail.com", "123")

chai.addCourses();

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai === masalaChai)

console.log(chai === tea)
