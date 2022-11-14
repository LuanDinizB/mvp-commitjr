import api from "../Config/axios";
import api_key from "../Config/env";

async function GetUpcomingList() {
    try {
        const response = await api.get(`/3/movie/upcoming?api_key=${api_key}&language=pt-BR`);

        if (response.status >= 200 && response.status < 300) {
            const upcomingList = response.data.results; 
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
        const response = await api.get(`/3/genre/movie/list?api_key=${api_key}&language=pt-BR`);
        if (response.status >= 200 && response.status < 300) {
            const movieGenres = response.data.genres;
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

async function GetMovieByGenre(genero: String) {
    try {
        const response = await api.get(`/3/discover/movie?api_key=${api_key}&language=pt-BR&year=2021&with_genres=${genero}`);
        if (response.status >= 200 && response.status < 300) {
            const movieByGenre = response.data.results;
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

async function GetMoviesList(){
    try{
        const response = await api.get(`/3/discover/movie?api_key=${api_key}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate`);
        if(response.status >= 200 && response.status <300){
            const movieList = response.data;
            return {
                status: true,
                data: movieList
            }
        }

        return {
            status: false,
            data: "Failed the request",
        }
    }catch(err){
        throw (err);
        
    }
}

async function GetMovieVideo(movieId: String){
    try{
        const response = await api.get(`3/movie/${movieId}/videos?api_key=<<api_key>>&language=pt-BR`);
        if(response.status >= 200 && response.status <300){
            const movieVideo = response.data;
            return {
                status: true,
                data: movieVideo
            }
        }
        return {
            status: false,
            data: "Failed the request",
        }
    }catch(err){
        throw (err);
        
    }
}

export { GetUpcomingList, GetGenreList, GetMovieByGenre, GetMoviesList, GetMovieVideo};