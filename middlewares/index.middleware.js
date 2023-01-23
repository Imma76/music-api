import sequelize from '../config/db.config.js';
import indexRouter from '../routes/index.routes.js';
import express from 'express';

const middleware = (app) => {
    app.use(express.json());
    app.use(express.urlencoded
        ({ extended: false }));
    sequelize.sync().then(val => {
        console.log('db connected')
    }).catch(err=>{
        console.log(`${err}`)
    })
    app.use(indexRouter);
}


export default middleware;
