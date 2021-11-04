import { Router } from "express";
const router = Router();
import { UpcomingController, GenresController, MoviesController, MoviesListController } from './api';

const UpcomingMovies = new UpcomingController();
const GenresList = new GenresController();
const movieByGenre = new MoviesController();
const movieList = new MoviesListController();

router.get('/upcomingMovies', UpcomingMovies.getUpcomingList);

router.get('/genresList', GenresList.getGenreList);

router.get('/movieGenre/:genero', movieByGenre.getMovieByGenre);

router.get('/movieList', movieList.getMovieList);

export default router;