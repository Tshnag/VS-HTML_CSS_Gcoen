
// const http = require('http')
// const fs = require('fs')
// const homePage =fs.readFileSync('index.html')
// const aboutPage =fs.readFileSync('about.html')
// const notFoundPage =fs.readFileSync('notfound.html')
// const server = http.createServer((req, res)=>{
//     if(req.url==='/about'){
//         res.end(aboutPage)
//     }
//     else if(req.url==='/'){
//         res.end(homePage)
//     }
//     else{
//         res.writeHead(404)
//         res.end(notFoundPage)
//     }
// })

// server.listen(3000)


const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(_dirname,'index.html'))
})
app.listen(3000,()=>{
    console.log("App is listening on port 3000")
})