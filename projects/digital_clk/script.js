const clock=document.getElementById('clock')
// document.querySelector('')

setInterval(()=>{
    let date=new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString()
},1000)