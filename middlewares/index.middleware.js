import sequelize from '../config/db.config.js';
import indexRouter from '../routes/index.routes.js';
import express from 'express';
import errorHandler from './error.middleware.js';

const middleware = (app) => {
    app.use(express.json());
    app.use(express.urlencoded
        ({ extended: false }));
    sequelize.sync().then(val => {
        console.log('db connected')
    }).catch(err=>{
        console.log(`${err}`)
    })
    app.use(errorHandler);
    app.use(indexRouter);
    app.use('*',(req,res)=>{
        return res.status(500).send({status:false,messge:'app is up and running, check the docs'})
    })
}


export default middleware;
