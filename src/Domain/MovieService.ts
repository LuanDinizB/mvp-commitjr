import { GetMovieByGenre } from "../Repository/Repository";

class MovieService {
    async getMovieByGenre() {
        const repositoryResponse = await GetMovieByGenre();
        if (repositoryResponse.status) {
            return repositoryResponse;
        };
    };

};

export default MovieService;