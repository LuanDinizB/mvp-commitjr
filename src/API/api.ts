import { Request, Response } from "express";
import UpcomingService from "../Domain/UpcomingService";
import GenresService from "../Domain/GenreService";
import MovieService from "../Domain/MovieService";

class UpcomingController {

    async getUpcomingList(request: Request, response: Response) {
        try {
            const upcomingData = new UpcomingService();
            const upcomingMovies = await upcomingData.getUpcomingList();
            if (upcomingMovies != null) {
                return response.send(upcomingMovies);
            };

            return response.send({ err: 'Err' });

        } catch (err) {
            throw err;
        };

    };

};

class GenresController {

    async getGenreList(request: Request, response: Response) {
        try {
            const genresData = new GenresService();
            const genresLists = await genresData.getGenreList();
            if (genresLists != null) {
                return response.send(genresLists);
            };

            return response.send({ err: 'Err' });

        } catch (err) {
            throw err;
        };

    };

};

class MoviesController {
    async getMovieByGenre(request: Request, response: Response) {
        try {
            const movieData = new MovieService();
            const movieLists = await movieData.getMovieByGenre();
            if (movieLists != null) {
                return response.send(movieLists);
            };
            return response.send({ err: 'Err' });

        } catch (err) {
            throw err;
        };

    };
};

export { UpcomingController, GenresController, MoviesController };