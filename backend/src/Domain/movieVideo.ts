import { GetMovieVideo } from "../Repository/Repository";

class MovieVideoService {
    async getMovieVideo(movieId: String) {
        const repositoryResponse = await GetMovieVideo(movieId);
        if (repositoryResponse.status) {
            return repositoryResponse;
        };
    };

};

export default MovieVideoService ;