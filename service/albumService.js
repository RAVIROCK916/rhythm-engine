const { Album } = require('../models');

const getAlbums = async () => {
    try {
        const albums = await Album.find();
        return albums;
    } catch (error) {
        throw new Error('Error while retrieving albums' + error);
    }
}

const createAlbums = async (albumData) => {
    try {
        const newAlbum = await Album.create(albumData);
        return newAlbum;
    } catch (error) {
        throw new Error('Error while creating Album' + error);
    }
}

module.exports = { getAlbums, createAlbums };