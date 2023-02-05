
import Song from "../model/song.model.js";


class SongController{
    async createSong(req, res) {
        const create = Song.create
            ({ artistId: req.body.artistId, songLink:req.body.songLink }).then(val=>{

                return res.status(201).send({status:true,message:'song created successfully'})
            }).catch(err =>{
                return res.status(500).send({ status: false, message: `${err}` });
            });
    }


    
}


export default new SongController();