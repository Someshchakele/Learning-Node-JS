const express = require('express');
const moviesController = require('./../Controller/moviesController')
const authController = require('./../Controller/authController')


const router = express.Router()

router.route('/movie-stats').get(moviesController.getMoviesStats);

// router.param('id', moviesController.checkId)
router.route('/')
        .get(authController.protect,moviesController.getAllMovies)
        // .post(moviesController.validateBody ,moviesController.createMovie)
        .post(moviesController.createMovie)

        router.route('/:id')
        .get(moviesController.getMovie)
        .patch(moviesController.updateMovie) 

module.exports = router;