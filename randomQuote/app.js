//PSEUDO
// anxious talk with api 
// sent api req random quote
// get api responce random quote
// json control 
// json to dom 
// when u click generate new quote


//add sources axios express fs http 
const axios = require('axios')
const express = require('express')
const fs = require('fs')
const http = require('http')
//server up
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//define quote author btn
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const btn = document.getElementById("btn")


//talking with api 




//dom 

//