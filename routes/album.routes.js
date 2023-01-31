import express from 'express';
import albumController from '../controllers/album.controller.js';

const albumRouter = express.Router();


albumRouter.post('/',albumController.createAlbum);
albumRouter.put('/update',albumController.updateAlbumSongs);

export default albumRouter;