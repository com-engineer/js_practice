const user={
    name:"gaurav",
    price:999,
    wlcmsg:function(){
        console.log(`${this.name},welcome to website`);
    }
}
// user.wlcmsg()
// user.name="sam"
// user.wlcmsg()
// console.log(this);
function one(){
    // console.log(this);
}
one()
// const add=(num1,num2)=>{
//     return num1+num2
// }
const add=(num1,num2)=>(num1+num2);
console.log(add(3,4));