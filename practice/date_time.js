let date=new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof(date));
// let date1=new Date(2024,5,30,5,3)
// let date1=new Date("2024-05-30")//yyyy-mm-dd formate
let date1=new Date("05-30-2024")//mm-dd-yyyy formate
// console.log(date1.toLocaleString());
let timestamp=Date.now()
// console.log(timestamp);
// console.log(date1.getTime());
// console.log(Math.floor(Date.now()/1000));
// console.log(date);
// console.log(date.getMonth()+1);
// console.log(date.getDay());
let text=`todays date is ${date.getDate()} and day is ${date.getDay()}`
// console.log(text)
date1.toLocaleString('default',{
    weekday:"long",
})



//////////////////
let array=[2,4,3,[5,6,7],[8,[9,0],12],13]
console.log(array.flat(Infinity));