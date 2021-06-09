const user = (sequelize,Sequelize) =>{
    const user = sequelize.define("tutorial",{
        username : {
            type : Sequelize.STRING
        },
        email : {
            type : Sequelize.STRING
        },
        password : {
            type : Sequelize.STRING
        }
    }, {
        timestamp:true
    })
    return user;
    
    }
    
    export default user