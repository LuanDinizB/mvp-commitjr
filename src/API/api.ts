import { Request, Response } from "express";
import UpcomingService from "../Domain/UpcomingService";
import GenresService from "../Domain/GenreService";
import MovieService from "../Domain/MovieService";
import MovieListService from "../Domain/MovieListService";
import MovieVideoService from "../Domain/movieVideo";

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
            const genero = request.params.genero;
            const movieLists = await movieData.getMovieByGenre(genero);
            if (movieLists != null) {
                return response.send(movieLists);
            };
            return response.send({ err: 'Err' });

        } catch (err) {
            throw err;
        };

    };
};

class MoviesListController {
    async getMovieList(request: Request, response: Response) {
        try {
            const movieListData = new MovieListService();
            const movieLists = await movieListData.getMoviesList();
            if (movieLists != null) {
                return response.send(movieLists);
            };
            return response.send({ err: 'Err' });

        } catch (err) {
            throw err;
        };

    };
};

class MoviesVideoController {
    async getMoviesVideo(request: Request, response: Response) {
        try {
            const movieVideoData = new MovieVideoService();            
            const movieId = request.params.movieId;
            const movieVideo = await movieVideoData.getMovieVideo(movieId);
            if (movieVideo != null) {
                return response.send(movieVideo);
            };
            return response.send({ err: 'Err' });

        } catch (err) {
            throw err;
        };

    };
};

export { UpcomingController, GenresController, MoviesController, MoviesListController, MoviesVideoController};