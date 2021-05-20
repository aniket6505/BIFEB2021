import pgconfig from '../config/db.postgres.config.js'
import Sequelize from 'sequelize';
import tutorial from './tutorial.model.js'

const sequelize = new Sequelize (pgconfig.DB,pgconfig.USER,pgconfig.PASSWORD{
    host: pgconfig.host,
    port : pgconfig.PORT,
    dailect : pgconfig.dailect,
    operatorsAliases : false,
    pool :{
        max : pgconfig.pool.max,
        min : pgconfig.pool.min,
        acquire : pgconfig.pool.acquire,
        idle : pgconfig.pool.idle
    }
});


 

 export default db = {
     Sequelize : sequelize,
    sequelize : sequelize,
    tutorials : tutorial.tutorial(sequelize,Sequelize)

 }