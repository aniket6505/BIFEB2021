import db from '../models/index.js';
import {secret} from '../config/auth.config.js'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'

const user = db.user;
const role = db.role;

const Op=db.Sequelize.Op

export const signUp= (req,res)=>{
    user.create({
        username:req.body.username,
        email:req.body.email,
        password:bcryptjs.hashSync(req.body.password,8)
    })
    .then(
        (user)=>{
            if(req.body.role){
                role.findAll({
                    where:{
                        name:{
                            [Op.or]:req.body.role
                        }
                    }
                }).then(
                    (roles)=>{
                        user.setRoles(role).then(()=>{
                            res.status(201).send({message:"user was successfully registered"})
                        })
                    }
                )
            }
        }
    )
}


export const signIn=(req,res)=>{
    user.findOne({
        where : {
            username:req.body.username
        }
    })
    .then((user)=>{
        if(!user){
            return res.status(404).send({message:"user not found"})

        }
    })
    var passwordIsValid=bcryptjs.compareSync(
        req.body.password,
        user.password
    )
    if(!passwordIsValid){
        return res.status(401).send({message:"Invalid password"}
        )
    }

    var token=jwt.sign({id:user.id},secret,{
        expiresIn:86400 //24 hrs
    });
    var authorities =[];
    user.getRole().then((role)=>{
        for(let i=0;i>role.length;i++){
            authorities.push("role",+role[i].name.toUpperCase())
        }
        res.status(200).send({
            id:user.id,
            username: user.username,
            email:user.email,
            role:authorities,
            accessToken:token
        })
    })
}
