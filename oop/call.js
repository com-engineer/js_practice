function setUsername(username){
    this.username=username
 
    console.log("called");
}

function createUser(username,email,password){
    // setUsername(username)///call is not happening we have just given the references
    setUsername.call(this,username)
    this.email=email,
    this.password=password
}
const guest=new createUser("tea","tea@","35423")
console.log(guest);