import express from 'express';

const userRouter = express.Router();
userRouter.post('/');
userRouter.post('/login')

export default userRouter;