import requests from "../utils/requests"

export class Movies {
    static getTrendingMovies = async () => {
        const req = await fetch(requests.fetchTrending);
        const res = await req.json();
        return res.results;
    }
    static getNetflixOriginals = async () => {
        const req = await fetch(requests.fetchNetflixOriginals);
        const res = await req.json();
        return res.results;
    }
}