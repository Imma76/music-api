import {Sequelize} from 'sequelize';

const sequelize =new  Sequelize('Music-api','postgres','advent',{'dialect':'postgres'});




export default sequelize;