// console.log("Siiiiiiiiiiiiiiiiiii")
// const suii = [1,2,4,5,6]
// const sii  = [...suii,""]
// console.log(sii);

// const sioo =()=>10

// console.log(sioo())

// const set=setInterval(()=>{
//     console.log("zett")
// },1000)

// setTimeout(()=>
// {
//     clearInterval(set)
// },3000)
// console.log(__filename)
// const path = require("path")
// const fs = require("fs")
// const { Console } = require("console")
// let uname = "salman "
// console.log(path.basename(__dirname))
// fs.writeFile(path.join(__dirname,"/views","contact.text"),`username:${uname}`,(err)=>{
//     if(err) throw err;
// })       

// fs.appendFile(path.join(__dirname,"/api","api.text"),`\nusername:${uname}`,(err)=>{
//     if(err) throw err;
// })

// fs.readFile(path.join(__dirname,"/api","api.text"),`utf-8`,(err,data)=>{
//     if(err)
//     throw err;
//     console.log(data)

// })
// const evntem = require("events")
// const emitter = new evntem()
// emitter.on("message",(data)=>
// {
//     console.log(data.text)
// })

// emitter.on("logout",(data)=>
// {
//     console.log(data.text)
// })

// emitter.emit("message",{text:"user logged"})

// emitter.emit("logout",{text:"user log out"})

//------------http methodes

// const http =require("http")
// const server = http.createServer((req,res)=>{
//     if(req.url ==="/")
//     {
//         fs.readFile(path.join(__dirname,"views","index.html"),`utf-8`,(err,data)=>
//     {
//         if (err) throw err;
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.end(data)
//     })
//     }

//     if(req.url==="/contact")
//     {
//         fs.readFile(path.join(__dirname,"views","contact.html"),`utf-8`,(err,data)=>
//     {
//         if (err) throw err;
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.end(data)
//     })
//     }
// })
// const PORT =process.env.PORT || 3001;
// server.listen(PORT,()=>console.log(`Server running On ${PORT}`))

const {logger,myname} = require("./utils")
console.log(logger());
console.log(myname);
 