import { GetGenreList } from "../Repository/Repository";

class GenresService {
    async getGenreList() {
        const repositoryResponse = await GetGenreList();
        if (repositoryResponse.status) {
            return repositoryResponse;
        };
    };
};

export default GenresService;