import {Sequelize} from 'sequelize';

const sequelize =new  Sequelize('Music-api','postgres','advent',{'dialect':'sql'});


export default sequelize;