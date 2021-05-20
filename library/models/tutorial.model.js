const tutorial = (sequelize,Sequelize) =>{
const tutorial = sequelize.define("tutorial",{
    title : {
        type : Sequelize.STRING
    },
    description : {
        type : Sequelize.STRING
    },
    Publish : {
        type : Sequelize.STRING
    }
})
return tutorial;

}

export default tutorial