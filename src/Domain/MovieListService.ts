import { GetMoviesList } from "../Repository/Repository";

class MovieListService {
    async getMoviesList() {
        const repositoryResponse = await GetMoviesList();
        if (repositoryResponse.status) {
            return repositoryResponse;
        };
    };
};

export default MovieListService;