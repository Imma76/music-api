import sequelize from '../config/db.config.js';
import Sequelize from 'sequelize';


const Album = sequelize.define('Album', {
    id: {
        autoIncrement:true,
        type:Sequelize.INTEGER,
    },
    songLinks: {
        type: Sequelize.ARRAY(Sequelize.STRING)
        
        
        //DataTypes.ARRAY(DataTypes.STRING)
    },
    author: {
        type: Sequelize.STRING,
        allowNull:false,
    },
    title:{

        type:Sequelize
    }

});

export default Album;