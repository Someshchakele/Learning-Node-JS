const express = require('express');
const moviesController = require('./../Controller/moviesController')


const router = express.Router()

router.param('id', moviesController.checkId)
router.route('/')
        .get(moviesController.getAllMovies)
        .post(moviesController.validateBody ,moviesController.createMovie)

        router.route('/:id')
        .get(moviesController.getMovie)
        .patch(moviesController.updateMovie) 

module.exports = router;