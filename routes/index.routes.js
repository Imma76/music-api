import express from 'express';
import userRouter from './user.routes.js';

const indexRouter = express.Router();

indexRouter.use(userRouter);
export default indexRouter;