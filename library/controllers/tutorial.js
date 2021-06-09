import db from '../models/index.js'
const tutorials = db.tutorials;
const Op = db.Sequelize.Op;



export const getAlltutorialsbytitle=(req,res)=>{
    const title = req.query.title
    var condition = title ? {title : {[Op.ilike]:`%${title}`}}:null;
    console.log("554")
    
    tutorials.findAll({where : condition})
    .then(data=>{
        res.send(data)
    
    })
    .catch(err=>{
        res.status(500).send({
            massage: err.massage || "some err occ while getting details"
        })
    }
 )
}

export const gettutorialsById=(req,res)=>{

    tutorials.findByPk(req.params.id)
    .then(
        (result)=>{
                res.status(200).send(result)
        }

    )
    .catch(
        (err)=>
        {
            res.status(400).send(err)
        }
    )  
    

}

        
        

export const createTutorial = (req,res)=>{
    if(req.body.title==null||req.body.description==null) {
        res.status(400).send({
            message: "insufficient data..please put sufficient data"
        })
    }
    const tutorial = {
        title : req.body.title,
        description: req.body.description,
        Publish: req.body.Publish ? req.body.Publish:false 
    }
    tutorials.create(tutorial)
   .then(
       (result)=>{
           res.status(201).send(result)
       }
   )
   .catch(
       (err)=>{
           res.status(500).send(
               {
                   message:err|| "internal db error"
               }
           )
       }
   )
}


export const deletetutorialById=(req,res)=>{
tutorials.destroy(
    {where:{id:req.params.id}}
).then(
    (result)=>{
        if(result == 1){
        res.status(200).send({
            message:`${result}"tutorial was deleted"`
        })
    }else{
        res.status(422).send({
            message:"this id does not exist"
        })
    }
}
).catch(
    (err)=>{
        res.status(500).send({
            message:err || "db error"
        })
    }
)
    
}


export const updatetutorialById=(req,res)=>{
    tutorials.update(req.body,{
        where:{id:req.params.id}
    }).then(
        (result)=>{
            if(result==1){
            res.status(200).send({
                message:"tutorial was updated"
            })
        }else{
            res.status(422).send({
                message:"this id does not exist"
            })
        }
        }
    ).catch(
        (err)=>{
            res.status(500).send({
                massage:err || "db error"
            })
        }
    )
        
    }