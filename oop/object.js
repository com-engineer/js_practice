function multiplyby5(num){//function is also an object in itself
    return num*5
}
multiplyby5.power=2
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);
function createUser(username,score){
    this.username=username;
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printme=function(){
    console.log(`score is${this.score}`);
}

const chai=new createUser("chai",5)
const tea=new createUser("tea",25)
chai.printme()