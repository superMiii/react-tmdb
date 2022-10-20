import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <img
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-99 opacity-60 h-screen w-screen object-cover"
        alt=""
      />
      <button
        className="absolute right-4 top-4 text-white bg-[#e50914] px-10 rounded-md font-semibold cursor-pointer object-contain md:right-10 md:top-6"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>

      <div className="text-4xl absolute text-white font-bold bg-opacity-90 p-8 rounded-md bg-black">
        WELCOME TO NETFLIX. <br />
        PLEASE LOGIN TO SEE MORE NETFLIX ORIGINAL MOVIES
      </div>

      <img
        src="https://rb.gy/ulxxee"
        alt=""
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
    </div>
  );
}

export default Login;
