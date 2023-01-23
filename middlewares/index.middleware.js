import sequelize from '../config/db.config.js';

const middleware = (app) => {
    sequelize.sync().then(val => {
        console.log('db connected')
    }).catch(err=>{
        console.log(`${err}`)
    })
}


export default middleware;
