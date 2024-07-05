const user={
    username:"gaurav",
    logincount:8,
    signedin:true,
    getUserDetails: function(){
        // console.log("got user details from databse");
        // console.log(`username:${this.username}`);
        console.log(this);
    }
}


// console.log(user.username);
// // console.log(user.getUserDetails());
console.log(this);
// const promiseone=new Promise()//new--->constructor function date=new Date()
function User(username,logincount,islogedin){
    this.username=username
    this.logincount=logincount
    this.islogedin=islogedin
    this.greeting=function(){
        console.log(`welcome,${this.username}`);
    }
     return this//implicitly defined
}
const userone=new User("gaurav",8,true)//new--->constructor function,it create new instance whenever it is used
//1:by using new constructor a empty object is created
//2:constructor function is called by new keyword
//3:all the arguements are injected into the this(object) keyword
//4:finally the output
const usertwo=new User("surya",7,true )
console.log(userone.constructor);
// console.log(usertwo);

// console.log(typeof(this));