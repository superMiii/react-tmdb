import {
  MinusIcon,
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import MuiModal from "@mui/material/Modal";
import Row from "./Row";

export default function Modal({
  showModal,
  setShowModal,
  currentMovie,
  addFavorite,
  deleteFavorite,
  favoriteMovie,
}) {
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState([]);
  const [muted, setMuted] = useState(true);

  const checkFavorite = favoriteMovie?.filter(
    (movie) => movie.id === currentMovie?.id
  );
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    if (!currentMovie) return;
    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          currentMovie?.media_type === "tv" ? "tv" : "movie"
        }/${
          currentMovie?.id
        }?api_key=3aab0814a4334f4de590116326312172&language=en-US&append_to_response=videos`
      )
        .then((res) => res.json())
        .catch((err) => console.error(err.message));
      if (data?.videos) {
        const index = data?.videos.results.findIndex(
          (element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    async function similarMovies() {
      const req = await fetch(
        `https://api.themoviedb.org/3/movie/${currentMovie?.id}/similar?api_key=3aab0814a4334f4de590116326312172&language=en-US&page=1`
      );
      const res = await req.json();
      setSimilarMovies(res.results);
    }

    fetchMovie();
    similarMovies();
  }, [currentMovie]);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-6 !bottom-2 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-black" />
                Play
              </button>
              {checkFavorite?.length > 0 ? (
                <button className="modalButton">
                  <MinusIcon
                    className="h-7 w-7"
                    onClick={() => deleteFavorite(currentMovie?.id)}
                  />
                </button>
              ) : (
                <button className="modalButton">
                  <PlusIcon
                    className="h-7 w-7"
                    onClick={() => addFavorite(currentMovie)}
                  />
                </button>
              )}
              <button className="modalButton">
                <ThumbUpIcon className="h-7 w-7" />
              </button>
            </div>
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeOffIcon className="h-6 w-6" />
              ) : (
                <VolumeUpIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {currentMovie?.vote_average * 10}% match
              </p>
              <p className="font-light">
                {currentMovie?.release_date || currentMovie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">{currentMovie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres:</span>
                  {genres.map((genre) => genre.name).join(", ")}
                </div>

                <div>{currentMovie?.original_language}</div>

                <div>
                  <span className="text-[gray]">Total count:</span>
                  {currentMovie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-b-md bg-[#181818] px-10 py-8">
          <div className="relative pb-10 lg:space-y-24">
            <section className="md:space-y-24">
              <Row title="Similar Movies" movies={similarMovies} />
            </section>
          </div>
        </div>
      </>
    </MuiModal>
  );
}
