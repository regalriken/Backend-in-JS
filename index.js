require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

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

const gitData = {
  "login": "regalriken",
  "id": 179285162,
  "node_id": "U_kgDOCq-sqg",
  "avatar_url": "https://avatars.githubusercontent.com/u/179285162?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/regalriken",
  "html_url": "https://github.com/regalriken",
  "followers_url": "https://api.github.com/users/regalriken/followers",
  "following_url": "https://api.github.com/users/regalriken/following{/other_user}",
  "gists_url": "https://api.github.com/users/regalriken/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/regalriken/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/regalriken/subscriptions",
  "organizations_url": "https://api.github.com/users/regalriken/orgs",
  "repos_url": "https://api.github.com/users/regalriken/repos",
  "events_url": "https://api.github.com/users/regalriken/events{/privacy}",
  "received_events_url": "https://api.github.com/users/regalriken/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Regal Riken",
  "company": null,
  "blog": "",
  "location": "Barrie, ON",
  "email": null,
  "hireable": null,
  "bio": "You found out my main ID, I need to hide...",
  "twitter_username": "rikenpatel30",
  "public_repos": 3,
  "public_gists": 0,
  "followers": 1,
  "following": 5,
  "created_at": "2024-08-24T04:33:37Z",
  "updated_at": "2026-01-18T03:28:38Z"
}

app.get("/git",(req,res)=>{
  res.json(gitData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})