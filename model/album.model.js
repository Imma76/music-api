import sequelize from '../config/db.config.js';
import { Sequelize } from 'sequelize';


const Album = sequelize.define('Album', {
    id: {
        autoIncrement:true,
        type:Sequelize.INTEGER,

        primaryKey:true
    },
    songLinks: {
        type: Sequelize.ARRAY(Sequelize.STRING)
        
        
        //DataTypes.ARRAY(DataTypes.STRING)
    },
    authorName: {
        type: Sequelize.STRING,
        allowNull:false,
    },
    title:{

        type:Sequelize.STRING
    },
    authorId: {
        type: Sequelize.INTEGER,
        allowNull:false,
    },

});

export default Album;