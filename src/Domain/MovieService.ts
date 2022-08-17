import { GetMovieByGenre } from "../Repository/Repository";

class MovieService {
    async getMovieByGenre(genero: String) {
        const repositoryResponse = await GetMovieByGenre(genero);
        if (repositoryResponse.status) {
            return repositoryResponse;
        };
    };

};

export default MovieService;