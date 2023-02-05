import  Sequelize  from "sequelize";
import sequelize from "../config/db.config.js";

const Song = sequelize.define('Song', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type:Sequelize.INTEGER,
    },
    songLink:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    artistId:{

        type:Sequelize.INTEGER
    }
    
})

export default Song;