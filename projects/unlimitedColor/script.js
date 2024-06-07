//generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]

    }
    return color
}
// console.log(randomColor());
let intervalId
document.querySelector("#start").addEventListener('click', function () {
    intervalId = setInterval(() => {
        console.log(randomColor());
        document.body.style.backgroundColor = randomColor()

    }, 1000)
    // console.log(randomColor());
    // document.body.style.backgroundColor=randomColor()

})
document.querySelector("#stop").addEventListener('click', function () {
    clearInterval(intervalId)
    intervalId=null;
})