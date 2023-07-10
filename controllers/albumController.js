const { albumService } = require('../service')

const getAlbums = async (req, res) => {
    const albumData = await albumService.getAlbums();
    res.json(albumData)
}

const postAlbums = async (req, res) => {
    const data = req.body;
    const albumData = await albumService.createAlbums({ title: data[0], author: data[1], audioLink: data[2] });
    res.status(200).send()
}

module.exports = { getAlbums, postAlbums }