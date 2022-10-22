import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import { Movies } from "../services/movies";
import requests from "../utils/requests";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  let navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("_token");
    navigate("/login");
  };
  useEffect(() => {
    let authToken = sessionStorage.getItem("_token");

    if (authToken) {
      navigate("/");
    }
    if(!authToken) {
      navigate('/login')
    }
    const getMovies = async () => {
      const trendingMovies = await Movies.getTrendingMovies();
      const netflixOriginals = await Movies.getNetflixOriginals();
      setTrendingMovies(trendingMovies);
      setNetflixOriginals(netflixOriginals);
    }
    getMovies();
  }, [navigate]);
  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <Header handleLogout={handleLogout} />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingMovies} />
          {/* <Row title="Top Rated" movies={requests.topRated} />
          <Row title="Action Thrillers" movies={requests.actionMovies} />
          <Row title="Comedies" movies={requests.comedyMovies} />
          <Row title="Scary Movies" movies={requests.horrorMovies} />
          <Row title="Romance Movies" movies={requests.romanceMovies} />
          <Row title="Documentaries" movies={requests.documentaries} /> */}
        </section>
      </main>
    </div>
  );
}

export default Home;
