class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        this.logMe(`Username:${this.username}`)
    }
    static createId(){
        return `123`
    }
}
const gaurav= new User("gaurav")
// console.log(gaurav.createId())


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone","iphoe@")
iphone.logMe()