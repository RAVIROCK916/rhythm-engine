const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');


router.get('/albums', albumController.getAlbums);

router.post('/albums', albumController.postAlbums);

module.exports = { router };