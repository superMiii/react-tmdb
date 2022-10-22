import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";
import requests from "../utils/requests";

function Banner({ netflixOriginals }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  console.log(movie)
  console.log(netflixOriginals)

  return (
    <div className="flex flex-col space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 bg-gradient-to-b to-black-500 -z-10 h-[95vh] w-screen">
        <img
          src={`${requests.baseUrlImage}${
            movie?.backdrop_path || movie?.poster_path
          }`}
          layout="fill"
          className="object-cover"
          alt=""
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl text-white">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-white">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70" onClick={() => {}}>
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
