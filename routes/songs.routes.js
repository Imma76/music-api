import express from 'express';
import songController from '../controllers/song.controller.js';
const songRouter = express.Router();



songRouter.post('/', songController.createSong);
songRouter.put('/', songController.updateSong);
songRouter.delete('/:id', songController.deleteSong);


export default songRouter;