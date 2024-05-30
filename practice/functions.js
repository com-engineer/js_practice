function myname(){
    console.log("my name is gaurav");
}
myname()
function sum(a,b){
    return a+b;
}
console.log(sum(null,3))
function loginusermesg(username="sam"){
    if(!username){
        console.log("please enter a username");
        // return
    }
    else{
    return `${username} has just loggedin`
    }
}
console.log(loginusermesg("gaurav"))
console.log(loginusermesg())



const sum1=(a,b)=>{
    return a+b;
}
console.log(sum1(2,3))
function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,300,400))//giving multiple values for using rest or spread operator .....
const course={
    coursename:"js in hindi",
    price:"999",
    instructor:"hitesh"
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.coursename} and price is ${anyObject.price}`);
}
handleObject(course)
let arr=[2,3,4,5,6]
function newarray(anyarray){
    console.log("array is",anyarray)
}
newarray(arr)
function one(){
    const username="hitesh"
    function two(){
        const website='youtube'
        console.log(username);///child function can access the variable of parent function
    }
    // console.log(website);
    two()
}
one()
if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        console.log(username+website);
    }
   // console.log(website);
}
//console.log(username);