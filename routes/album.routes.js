import express from 'express';
import albumController from '../controllers/album.controller.js';

const albumRouter = express.Router();


albumRouter.post('/',albumController.createAlbum);
albumRouter.put('/update',albumController.updateAlbumSongs);
albumRouter.delete('/:albumId', albumController.deleteAlbum);

export default albumRouter;