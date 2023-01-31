import express from 'express';
import userRouter from './user.routes.js';
import albumRouter from './album.routes.js';
import songRouter from './songs.routes.js';

const indexRouter = express.Router();


indexRouter.use('/user',userRouter);
indexRouter.use('/album', albumRouter);
indexRouter.use('/song',songRouter);
export default indexRouter;