import { Router } from "express";
const router = Router();
import { UpcomingController, GenresController, MoviesController } from './api';

const UpcomingMovies = new UpcomingController();
const GenresList = new GenresController();
const movieByGenre = new MoviesController();

router.get('/upcomingMovies', UpcomingMovies.getUpcomingList);

router.get('/genresList', GenresList.getGenreList);

router.get('/movieGenre', movieByGenre.getMovieByGenre);

export default router;