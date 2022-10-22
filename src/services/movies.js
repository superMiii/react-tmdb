import requests from "../utils/requests";

export class Movies {
  static getTrendingMovies = async () => {
    const req = await fetch(requests.fetchTrending);
    const res = await req.json();
    return res.results;
  };
  static getNetflixOriginals = async () => {
    const req = await fetch(requests.fetchNetflixOriginals);
    const res = await req.json();
    return res.results;
  };
  static getTopRatedMovies = async () => {
    const req = await fetch(requests.fetchTopRated);
    const res = await req.json();
    return res.results;
  };
  static getActionMovies = async () => {
    const req = await fetch(requests.fetchActionMovies);
    const res = await req.json();
    return res.results;
  };
  static getComedyMovies = async () => {
    const req = await fetch(requests.fetchComedyMovies);
    const res = await req.json();
    return res.results;
  };
  static getHorrorMovies = async () => {
    const req = await fetch(requests.fetchHorrorMovies);
    const res = await req.json();
    return res.results;
  };
  static getRomanceMovies = async () => {
    const req = await fetch(requests.fetchRomanceMovies);
    const res = await req.json();
    return res.results;
  };
  static getDocumentaries = async () => {
    const req = await fetch(requests.fetchDocumentaries);
    const res = await req.json();
    return res.results;
  };
}
