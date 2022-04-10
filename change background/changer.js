
//define button,bg
const btn = document.querySelector("button")
const body = document.querySelector("body")

//define color array 
const colors =['red','blue','purple','pink','yellow','black','orange'];

//event

btn.addEventListener('click',()=>{
    let randomNumber = Math.floor(Math.random()*7)
    console.log(randomNumber)
    body.style.backgroundColor = `${colors[randomNumber]}`
})