const tutorials = (sequelize,Sequelize) =>{
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
}, {
    timestamp:true
})
return tutorial;

}

export default tutorials