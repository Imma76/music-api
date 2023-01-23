import sequelize from '../config/db.config.js';
import { Sequelize } from 'sequelize';

const User = sequelize.define('User',{
    id:{
        autoIncrement:true,
        type:Sequelize.INTEGER,
        primaryKey:true,
    },
    name: {
        type:Sequelize.STRING,
    },
    email: {
        type:Sequelize.STRING,
    },
    password: {
        type:Sequelize.STRING
    }
})