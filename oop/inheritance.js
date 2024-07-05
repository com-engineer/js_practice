class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`a new cours was added by ${this.username}`);
    }
}


const guest= new Teacher("guest","guest@","1356")
guest.addCourse()


const guestOne=new User("guestOne")
guestOne.logMe()

console.log(guest instanceof User);