import express from 'express';
import songController from '../controllers/song.controller.js';
const songRouter = express.Router();



songRouter.post('/', songController.createSong);
songRouter.put('/', songController.updateSong);


export default songRouter;