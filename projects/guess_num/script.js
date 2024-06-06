let randomNum=parseInt(Math.random()*100 +1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guesslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworhi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')
let prevGuess=[]
let numguess=1

let playGame=true
if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault(e)
       const guess= parseInt(userInput.value)
       validateGuess(guess)
    })
}
function validateGuess(guess){
if(isNaN(guess)){
    alert("please enter a valid number")
}
else if(guess<1){
    alert("please enter a number more than one")

}
else if(guess>100){
    alert("please enter a number less than 100")

}
else{
    prevGuess.push(guess)
    if(numguess===11){
        displayGuess(guess);
        displaymsg(`Game over,Randome number was${randomNum}`)
        endGame()
    }
    else{
        displayGuess(guess);
        checkGuess(guess)
    }
}
}
function checkGuess(guess){
if(guess===randomNum){
    displaymsg(`you guessed it right`)
    endGame()
}
else if(guess<randomNum){
    displaymsg(`number is low`)
}
else if(guess>randomNum){
    displaymsg(`number is high`)
}

}
function displaymsg(msg){
loworhi.innerHTML=`<h2>${msg}</h2>`
}
function displayGuess(guess){
    userInput.value=''
    guesslot.innerHTML+=`${guess}-> `
    numguess++;
    remaining.innerHTML=`${11-numguess}`
}
function newGame(){
const newGamebtn=document.querySelector('#newGame')
newGamebtn.addEventListener('click',function(e){
    randomNum=parseInt(Math.random()*100 +1)
    playGame=true
    numguess=1
    guesslot.innerHTML=''
    remaining.innerHTML=`${11-numguess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(P); 
})
}
function endGame(){
userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML='<h2 id="newGame">Start new Game</h2>'
startOver.appendChild(p)
playGame=false
newGame()
}