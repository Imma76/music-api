
import Song from "../model/song.model.js";


class SongController{
    async createSong(req, res) {
        const create = Song.create
            ({ artistId: req.body.artistId, songLink:req.body.songLink });
    }
}


export default new SongController();