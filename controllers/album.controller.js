import Album from "../model/album.model.js";
import
Sequelize from 'sequelize';

class AlbumController{
    async createAlbum(req, res) {
        const create = Album.create({ title: req.body.title, authorName: req.body.authorName, songLinks: req.body.songLinks, authorId: req.body.authorId, }).then((val) => {
            return res.status(200).send({status:true, message:'album created successfully'})
        }).catch(err=>{

           return  res.status(500).send({status:false, message:`${err}`})
        })
    }
    async updateAlbumSongs(req,res){

        const update = Album.update({ songLinks: Sequelize.fn('array_append', Sequelize.col('songLinks'), req.body.songLink) },
            { where: { id: req.body.albumId } }).then(val=>{

                return res.status(200).send({ status: true, message: 'album updated successfully' });
            }).catch(err => {
                return res.status(500).send({status: false, message:`${err}`})
            })

    }
    
}





export default new AlbumController();