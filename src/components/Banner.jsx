import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";
import requests from "../utils/requests";

function Banner({ netflixOriginals, setShowModal, setCurrentMovie }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 justify-end h-[30vh] pb-12 md:h-[45vh] md:space-y-6 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <img
          src={`${requests.baseUrlImage}${
            movie?.backdrop_path || movie?.poster_path
          }`}
          layout="fill"
          className="object-cover bg-gradient-to-b"
          alt=""
        />
      </div>

      <h1 className="font-bold md:text-2xl lg:text-6xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="text-xs hidden md:block max-w-xs md:max-w-lg md:text-md lg:max-w-2xl lg:text-lg lg:leading-5">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-6 md:w-6" />
          Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
