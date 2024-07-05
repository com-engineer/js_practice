// let myname="gaurav      "
// console.log(myname.trueLength);

let myhero=["thor","iron_man"]

let heropower={
    thor:"hamer",
    iron_man:"ironsteel",
    getthorPower:function(){
        console.log(`thor power is ${this.thor}`);
    }
}
Object.prototype.gaurav=function(){
    console.log(`gaurav is present in all objects`);
}
Array.prototype.heygaurav=function(){
    console.log("gaurav says hello");
}
// heropower.gaurav()
// myhero.gaurav()
myhero.heygaurav()
// heropower.heygaurav()



//inheritance
const user={
    name:"guest",
    email:"guest@gmail.com"
}

const teacher={
    makevedio:true
    
}
const teachingSupport={
    isavialable:false
}

const TASupport={
    makeAssignment:'js assignment',
    fulltime:true,
    __proto__:teachingSupport
}
teacher.__proto__=user
//


//modern syntax


Object.setPrototypeOf(teachingSupport,teacher)


let anotherUsername="guestandguest    "
String.prototype.tureLength=function(){
    console.log(`${this}`);
    console.log(`true length is:${this.trim().length}`);
}
anotherUsername.tureLength()
"gaurav".tureLength()
"iceTea".tureLength()