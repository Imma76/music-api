import express from 'express';
import userRouter from './user.routes.js';
import albumRouter from './album.routes.js';

const indexRouter = express.Router();


indexRouter.use('/user',userRouter);
indexRouter.use('/album', albumRouter);
export default indexRouter;