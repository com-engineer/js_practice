class User{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
// const guest=new User("guest","guest@","465")
// console.log(guest.encryptPassword());
// console.log(guest.changeUsername());




//behind the sceen



function user(username,email,password){
    this.username=username,
        this.email=email,
        this.password=password
}
user.prototype.encryptPassword=function(){
    return `${this.password}abc`

}
user.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`

}
const guest=new User("guest","guest@","465")
console.log(guest.encryptPassword());
console.log(guest.changeUsername());
