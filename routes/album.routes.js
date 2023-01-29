import express from 'express';
import albumController from '../controllers/album.controller.js';

const albumRouter = express.Router();


albumRouter.post('/',albumController.createAlbum);


export default albumRouter;