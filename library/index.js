import express from "express"
import bodyparser from "body-parser"
import usersrouter from "./router/user.js"
import mongoose from 'mongoose'

const dburl='mongodb+srv://aniket:aniket@cluster0.krip9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(
            (result)=> {
                console.log("connected to the database")
                server.listen(PORT)
                console.log("server got started")
            }
    
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
const server=express();
const PORT=8080

server.use(bodyparser.json())
// server.get("/",(req,res)=>res.send("welcome to my library"))

var homepage=(req,res)=>res.send("welcome to my library") //handle http://localhost.8080/

server.use("/user",usersrouter)
server.get("/",homepage)



