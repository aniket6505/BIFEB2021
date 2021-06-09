import jwt from 'jsonwebtoken'
import config from '../config/auth.config.js'
import db from '../models/index.js';
const User = db.users
//"x-access-token": "jwt token"
verifyToken=(req, res, next)=>{
    let token = req.header["x-access-token"];
    if(!token){
        return res.status(403).send({
            message:"No token provided, Access forbidden"
        })
    }
    jwt.verify(token, config.secret, (err, decode)=>{
        if(err){
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
        req.userId=decode.id
        next();
    })
}

isAdmin = (req, res, next)=>{
    User.findByPk(req.userId)
        .then(
            (user)=>{
                user.getRoles()
                    .then(
                        (roles)=>{
                            for(let i=0;i<roles.length;i++){
                                if(roles[i].name==="admin")
                                console.log("User is admin")
                                next()
                                return
                            }

                            res.status(403).send({
                                message:"Forbidden"
                            })
                        }
                    )
            }
        )
}

const authJWT = {
    verifyToken:verifyToken,
    isAdmin:isAdmin
};
export default authJWT