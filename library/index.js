import express from "express"
import bodyparser from "body-parser"
import usersrouter from "./router/user.js"
import mongoose from 'mongoose'
import tutorialRouter from "./router/tutorial.js"
import pgdb from './models/index.js'
import cors from 'cors';
import {authenticate} from './router/auth.routes.js'

var corsOpt = {
    origin: "http://localhost:8080"
}

const role = pgdb.role;
function initilizeDB(){
    role.create({
        id : 1,
        name: "user"
    });
    role.create({
        id : 2,
        name: "admin",
    });role.create({
        id : 3,
        name: "moderator"
    })
}

pgdb.sequelize.sync({force:true})   //sync is used for creating the table in db
.then (
    ()=>{
        initilizeDB();
    }
)
// (result=>{
//     console.log(result)
// })
// .cathch(err=>{
//     console.log(err)
// })
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
server.use(cors(corsOpt));
//parse req of content-type - application/json
server.use(bodyparser.json())
// server.get("/",(req,res)=>res.send("welcome to my library"))

var homepage=(req,res)=>res.send("welcome to my library") //handle http://localhost.8080/

server.use("/user",usersrouter)
server.use("/tutorial", tutorialRouter)
authenticate(server)
server.get("/",homepage)



