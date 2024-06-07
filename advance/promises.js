const promise=new Promise((resolve, reject) => {
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(() => {
        console.log('async task is complete');
        resolve();
    }, 1000);
 
})
promise.then(()=>{
    console.log("promise consumed");
})

new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("async tsk two");
        resolve()
    }, 2000);
}).then(()=>{
    console.log("async two resolve");
})

const promiseThree=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username:"gaurav",email:"exapmle@!example.com"})
    }, 1000);
})
promiseThree.then((user)=>{
console.log(user);
})

const promiseFour=new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=false
        if(!error){
            resolve({username:"gaurav",password:"123"})
        }
        else{
            reject("ERROR:something went wrong")
        }
    }, 1000);
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((u)=>{
    console.log(u);
}).catch((e)=>{
    console.log(e);
}).finally(()=>{
    console.log("finally the promise is either resolve or rejected");
})


const promiseFive=new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=true
        if(!error){
            resolve({username:"gaurav",password:"123"})
        }
        else{
            reject("ERROR:js went wrong")
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response=await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



// async function getAllusers() {
//     try {
//         const response=await fetch("https://jsonplaceholder.typicode.com/users")
//     const data=await response.json()///converting into json also takes time so thats why we use"await"
//     console.log(data);
//     } catch (error) {
//         console.log("ERROR:",error);
//     }
    
// }
// getAllusers()



fetch("https://jsonplaceholder.typicode.com/users").then((r)=>{
    return r.json()
}).then((d)=>{
console.log(d);
})
.catch((e)=>{
    console.log(e);
})