import {user} from '../models/user.js'

let users=[] //this will act as user table(database)...later this will be replace with db call.

export const getusers= (req,res) =>{
    console.log("in func call get user../users endpoint got hit")
    user.find()
    .then(
        (result)=>{
            res.send(result)
        }
       
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
    // res.send(users)
}
export const getstudentdetails= (req,res) =>{
    console.log("in func call get user by id../users endpoint got hit")
    user.findById(req.query.name)
    .then(
        (result)=>{
            res.send(result)
        }
       
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )

}

export const createusers = (req,res)=>{
    console.log("in func create user")
    // users.push(req.body)
    const users = new user({
        name:req.body.name,
        gender:req.body.gender,
        age:req.body.age,
        city:req.body.city

    
    })
    users.save()
     .then (
       (result)=>{ 
      res.send(result)
    }
     )
     .catch(
         (err)=>{
             console.log(err)
         }
     )
}
export const deleteusersById= (req,res) =>{
    console.log("in func call get user by id../users endpoint got hit")
    user.findByIdAndDelete(req.params.id)
    .then(
        (result)=>{
            res.send(result)
        }
       
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
    }

    
export const updateusersById = (req,res) => {
        user.findByIdAndUpdate(req.params.id,{   
            age : req.body.age,
            city : req.body.city
        }).then(
            (result)=>{
                res.send(result)
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
    }