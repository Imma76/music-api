import Song from "../model/song.model.js";

class SongController {
  async createSong(req, res) {
    const create = Song.create({
      artistId: req.body.artistId,
      songLink: req.body.songLink,
    })
      .then((val) => {
        return res
          .status(201)
          .send({ status: true, message: "song created successfully" });
      })
      .catch((err) => {
        return res.status(500).send({ status: false, message: `${err}` });
      });
  }

  async updateSong(req, res) {
    const update = Song.findOne({ where: { id: req.body.songId } })
      .then((val) => {
        val.songLink = req.body.songLink;
        Song.update(
          { songLink: val.songLink },
          { where: { id: req.body.songId } }
        )
          .then((val) => {
            res
              .status(200)
              .send({ status: true, message: "song updated successfully" });
          })
          .catch((err) => {
            res.status(500).send({ status: false, message: `${err}` });
          });
      })
      .catch((err) => {
        res.status(500).send({ status: false, message: `${err}` });
      });
  }

  async deleteSong(req, res) {
    const delSong = Song.findOne({ where: { id: req.params.id } })
      .then((val) => {
        if (val === null) {
          return res
            .status(404)
            .send({ status: false, message: "song not found" });
        }

        val.destroy();
        return res
          .status(200)
          .send({ status: true, message: "song deleted successfully" });
      })
      .catch((err) => {
        res.status(500).send({ status: false, message: err.message });
      });
  }
}

export default new SongController();
