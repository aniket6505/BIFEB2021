import pgconfig from '../config/db.postgres.config.js'
import Sequelize from 'sequelize';
import tutorial from './tutorial.model.js'
import user from '../models/user.model.js'
import role from '../models/role.model.js'
console.log(pgconfig)

const sequelize = new Sequelize (pgconfig.DB,pgconfig.USER,pgconfig.PASSWORD,{
    host: pgconfig.host,
    dialect : pgconfig.dialect,
    port : pgconfig.PORT,
    operatorsAliases : false,
    pool :{
        max : pgconfig.pool.max,
        min : pgconfig.pool.min,
        acquire : pgconfig.pool.acquire,
        idle : pgconfig.pool.idle
    }
});


 

 const db = {
     Sequelize : sequelize,
    sequelize : sequelize,
    tutorial : tutorial(sequelize,Sequelize),
    user : user(sequelize,Sequelize),
    role : role(sequelize,Sequelize)


 }

 db.role.belongsToMany(db.user,{
     through : "user_role",
     foreignKey: "roleId",
     otherKey : "userId"
 })

 db.user.belongsToMany(db.role,{
    through : "user_role",
    foreignKey: "userId",
    otherKey : "roleId"
 })

 db.ROLES = [ "user", "admin", "moderator"]
 export default db