let sym1=Symbol("key1")
let obj={
    name:"gaurav",
    [sym1]:"key1",
    age:"20",
    location:"chembur",
    email:"user@hmail.com",
    "clg name":"vesit"
}
// console.log(obj.age);
// console.log(obj["location"]);
// console.log(obj["clg name"]);
// console.log(obj[sym1]);
// Object.freeze(obj)
obj.email="gaurav@gmail.com"
// console.log(obj.email);
obj.greeting=function(){
    // console.log("hell0 user");
    }
    obj.greeting2=function(){
        // console.log(`hello user,${this.name}`);
        }
    // console.log(obj.greeting());
    // console.log(obj.greeting2());
    // console.log(obj)
// const user=new Object()
let obj2={1:"a",2:"b"}
let obj3={3:"d",4:"c"}
// let obj4={obj2,obj3}
// let obj4=Object.assign({},obj2,obj3)//target--->{} and source--->obj2,obj3
let obj4={...obj2,...obj3}//often used
// console.log(obj4);
// console.log(Object.keys(obj));
// console.log(Object.values(obj))



/////////////destructuring the object

const course={
    coursename:"js in hindi",
    price:"999",
    instructor:"hitesh"
}
console.log(course.instructor)///old method
const {instructor:inst}=course
console.log(inst);


////////api
// {
//     "name":"gaurav",
//     "course":"js hindi"
// }
