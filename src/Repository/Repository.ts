import api from "../Config/axios";
import api_key from "../Config/env";

async function GetUpcomingList() {
    try {

        const response = await api.get(`/3/movie/upcoming?api_key=${api_key}&language=en-US`);
        if (response.status >= 200 && response.status < 300) {
            const upcomingList = response.data.results.map(function (obj: { original_title: string; }) {
                return { original_title: obj.original_title };
            });
            const upcomingDates = response.data.dates;

            return {
                status: true,
                dates: upcomingDates,
                data: upcomingList,
            };
        };
        return {
            status: false,
            data: "Falha na requisição"
        };
    } catch (err) {
        throw (err);

    };

};


async function GetGenreList() {
    try {

        const response = await api.get(`/3/genre/movie/list?api_key=${api_key}&language=en-US`);
        if (response.status >= 200 && response.status < 300) {
            const movieGenres = response.data.genres.map((obj: { name: string }) => obj.name);
            return {
                status: true,
                data: movieGenres,
            };
        };
        return {
            status: false,
            data: "Falha na requisição"
        };
    } catch (err) {
        throw (err);

    };

};

async function GetMovieByGenre() {

    
    try {

        const response = await api.get(`/3/discover/movie?api_key=${api_key}&language=en-US&year=2021&with_genres=${99}`);
        if (response.status >= 200 && response.status < 300) {       
            const movieByGenre = response.data.results.map((obj: { original_title: string; }) => obj.original_title);

            return {
                status: true,
                data: movieByGenre,
            };
        };
        return {
            status: false,
            data: "Falha na requisição"
        };
    } catch (err) {
        throw (err);

    };

};

export { GetUpcomingList, GetGenreList, GetMovieByGenre };