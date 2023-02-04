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
    async updateAlbumSongs(req, res) {
        const findAlbum = Album.findOne({ where: { id: req.body.albumId } }).then(val => {
            if(val === null){

                return res.status(404).send({ status: false, message: "album not found" });
            }
            let albumList = val.songLinks;

            console.log(albumList);
          //  let newList = albumList.push(req.body.songLink);


            val.songLinks.push(req.body.songLink);
            Album.update(
        
                {songLinks:val.songLinks}, { where: { id: req.body.albumId } }).then(val=>{

                return res.status(200).send({ status: true, message: 'album updated successfully' });
            }).catch(err => {
                return res.status(500).send({status: false, message:`${err}`})
            })
        }).catch(err => { 
            res.status(500).send({ status: false, message: `${err}` });
        })
        
    }
    async deleteAlbum(req, res) {
        const findAlbum = Album.findOne({ where: { id: req.params.albumId } }).then(val => {
            if (val === null) {
                return res.status(404).send({ status: false, message: 'album does not exist or album has been deleted already' });
               
            }
            val.destroy().then((val) => {
                return res.status(200).send({ status: false, message: 'album has been deleted' });
            }).catch(err => {
                return res.status(404).send({ status: false, message:'unable  to delete album' });
            })
        }).catch(err => { 
            res.status(500).send({ status: false, message: `${err}` });
        })
    }
    
}





export default new AlbumController();