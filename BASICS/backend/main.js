import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.send("Server is serving")
})

const port = process.env.PORT || 3000

const jokes = [
  {
    id: 1,
    title: "Why did the chicken cross the road?",
    content: "To get to the other side!"
  },
  {
    id: 2,
    title: "Parallel lines",
    content: "Parallel lines have so much in common… it’s a shame they’ll never meet."
  },
  {
    id: 3,
    title: "Time flies",
    content: "I told my clock a joke… now it’s ticking me off!"
  },
  {
    id: 4,
    title: "Math humor",
    content: "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
  },
  {
    id: 5,
    title: "Computer joke",
    content: "Why did the computer go to the doctor? Because it caught a virus!"
  }
];

app.get("/api/jokes",(req,res)=>{
    res.send(jokes)
})

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`)
})