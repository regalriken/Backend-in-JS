require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("riken-007")
})

app.get("/login",(req,res)=>{
    res.send("Welcome to login page")
})

app.get("/facebook",(req,res)=>{
    res.send("<h1>FACEBOOK HERE</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})