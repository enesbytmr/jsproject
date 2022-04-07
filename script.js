const _ =require("lodash")
const http = require("http")
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs")

//  Index.Html variable
const countDownPage = fs.open('./countdowntime/index.html',(err,data)=>{
  if(err){
    console.log(err)
  }else{
    return data.toString();

  }
})

app.use(bodyParser.urlencoded({extended:false}));

app.get("/countdowntimer", (req, res, next) => {

    res.send(countDownPage);
});

// app.use("/product", (req, res, next) => {
//   //database kayit islemi
//   console.log(req.body);
//   res.redirect("/");
// });
// app.post("/", (req, res, next) => {
//   res.send("<h1>hello from Enes</h1>");
// });

app.listen(3000, () => {
  console.log("listening 3000 port");
});
