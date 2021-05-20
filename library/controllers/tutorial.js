import db from '../models/index.js'
const tutorial = db.tutorials;
const Op = db.Sequelize.Op;
export const getAlltutorialsbytitle=(req,res)=>{
    const title = req.query.title
    var condition = title ? {title : {[Op.ilike]:`%${title}`}}:null;
    
    tutorial.findall({where : condition})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            massage: err.massage || "some err occ while getting details"
        })
    }
 )
};