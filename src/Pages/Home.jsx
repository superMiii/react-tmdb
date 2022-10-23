import { current } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Row from "../components/Row";
import { Movies } from "../services/movies";
import requests from "../utils/requests";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [showModal, setShowModal] = useState();
  const [currentMovie, setCurrentMovie] = useState([]);
  const [favoriteMovie, setFavoriteMovie] = useState(
    JSON.parse(localStorage.getItem("movie"))
  );
  let navigate = useNavigate();
  const handleLogout = () => {
    const confirmationLogout = window.confirm("Are you sure want to logout?");
    if (confirmationLogout) {
      sessionStorage.removeItem("_token");
      navigate("/login");
    }
    return;
  };
  useEffect(() => {
    let authToken = sessionStorage.getItem("_token");

    if (authToken) {
      navigate("/");
    }
    if (!authToken) {
      navigate("/login");
    }
    const getMovies = async () => {
      const trendingMovies = await Movies.getTrendingMovies();
      const netflixOriginals = await Movies.getNetflixOriginals();
      const topRated = await Movies.getTopRatedMovies();
      const actionMovies = await Movies.getActionMovies();
      const comedyMovies = await Movies.getComedyMovies();
      const horrorMovies = await Movies.getHorrorMovies();
      const romanceMovies = await Movies.getRomanceMovies();
      const documentaries = await Movies.getDocumentaries();
      setTrendingMovies(trendingMovies);
      setNetflixOriginals(netflixOriginals);
      setTopRated(topRated);
      setActionMovies(actionMovies);
      setComedyMovies(comedyMovies);
      setHorrorMovies(horrorMovies);
      setRomanceMovies(romanceMovies);
      setDocumentaries(documentaries);
    };
    getMovies();
  }, [navigate]);
  const addFavorite = (movie) => {
    if (favoriteMovie) {
      localStorage.setItem("movie", JSON.stringify([...favoriteMovie, movie]));
      setFavoriteMovie(JSON.parse(localStorage.getItem("movie")));
    } else {
      localStorage.setItem("movie", JSON.stringify([movie]));
      setFavoriteMovie(JSON.parse(localStorage.getItem("movie")));
    }
    toast.success("Add to favorite successfully");
  };
  const deleteFavorite = (movieId) => {
    if (favoriteMovie) {
      const newMovies = favoriteMovie.filter((movie) => movie.id !== movieId);
      setFavoriteMovie(newMovies);
      localStorage.setItem("movie", JSON.stringify(newMovies));
    }
    toast.success("Delete from favorite successfully");
  };
  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <Header handleLogout={handleLogout} />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner
          netflixOriginals={netflixOriginals}
          setShowModal={setShowModal}
          setCurrentMovie={setCurrentMovie}
        />
        <section className="md:space-y-24">
          {favoriteMovie.length > 0 && (
            <Row
              title="Favorites"
              movies={favoriteMovie}
              setShowModal={setShowModal}
              setCurrentMovie={setCurrentMovie}
            />
          )}
          <Row
            title="Trending Now"
            movies={trendingMovies}
            setShowModal={setShowModal}
            setCurrentMovie={setCurrentMovie}
          />
          <Row
            title="Top Rated"
            movies={topRated}
            setShowModal={setShowModal}
            setCurrentMovie={setCurrentMovie}
          />
          <Row
            title="Action Thrillers"
            movies={actionMovies}
            setShowModal={setShowModal}
            setCurrentMovie={setCurrentMovie}
          />
          <Row
            title="Comedies"
            movies={comedyMovies}
            setShowModal={setShowModal}
            setCurrentMovie={setCurrentMovie}
          />
          <Row
            title="Scary Movies"
            movies={horrorMovies}
            setShowModal={setShowModal}
            setCurrentMovie={setCurrentMovie}
          />
          <Row
            title="Romance Movies"
            movies={romanceMovies}
            setShowModal={setShowModal}
            setCurrentMovie={setCurrentMovie}
          />
          <Row
            title="Documentaries"
            movies={documentaries}
            setShowModal={setShowModal}
            setCurrentMovie={setCurrentMovie}
          />
        </section>
      </main>
      {/* Modal */}
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          currentMovie={currentMovie}
          setCurrentMovie={setCurrentMovie}
          addFavorite={addFavorite}
          deleteFavorite={deleteFavorite}
          favoriteMovie={favoriteMovie}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default Home;
