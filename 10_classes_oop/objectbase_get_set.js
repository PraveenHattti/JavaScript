const User = {
    _email: 'praveenhatti267@gmail.com',
    _password: 'Durgamata',


get email(){
    return this._email.toUpperCase()
},

set email(value){
    this._email = value
},

get password(){
    return this._password.toUpperCase()
},
set password(value){
    this._password = value
}

}

const tea = Object.create(User)
console.log(tea.email);
console.log(tea.password);
