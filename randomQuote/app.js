// //PSEUDO
// kullanici ilk basta rastgele bir quote gorur
// generate qutote bastiginda yenisi gelir

// api ile baglanti 
// apiden gelen ilk quote kullaniciya gosterilir (DOM)

// fs axios jsdom express

//plans
// axios talk with api 
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
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// const html = fs.readFile('index.html', function(err, data) {
//   if(err){
//     console.log(err)
//   }else{
//      contentStr = data.toString();
//      content = data;
//   }
let content
const dom = new JSDOM();

const deneme = JSDOM.fromFile("index.html", 'text/html').then(dom => {
   content= (dom.serialize());
});
//server up
const app = express()
const port = 300

app.get('/', (req, res) => {
  res.send(content)
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})

//define quote author btn
//calismiyor !!
// const document = dom.window.document;
// const author= document.querySelector('#author')
// const quote = document.querySelector('#quote')
// const btn = document.querySelector('#btn')



//  
//talking with api 



