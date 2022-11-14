import { Router } from "express";
const router = Router();
import { UpcomingController, GenresController, MoviesController, MoviesListController, MoviesVideoController } from './api';

const UpcomingMovies = new UpcomingController();
const GenresList = new GenresController();
const movieByGenre = new MoviesController();
const movieList = new MoviesListController();
const movieVideo = new MoviesVideoController();

router.get('/upcomingMovies', UpcomingMovies.getUpcomingList);

router.get('/genresList', GenresList.getGenreList);

router.get('/movieGenre/:genero', movieByGenre.getMovieByGenre);

router.get('/movieList', movieList.getMovieList);

router.get('/movieVideo/:movieId', movieVideo.getMoviesVideo);


export default router;