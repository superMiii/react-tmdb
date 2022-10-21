import React from "react";
import { Link } from "react-router-dom";

export const Form = ({
  title,
  setEmail,
  setPassword,
  setRepeatPassword,
  handleAction,
}) => {
  return (
    <>
      <div className="absolute mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        <div className="space-y-4">
          <label htmlFor="" className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="" className="inline-block w-full">
            <input
              type="password"
              className="input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {title === "Sign Up" && (
            <label htmlFor="" className="inline-block w-full">
              <input
                type="password"
                className="input"
                placeholder="Repeat Password"
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </label>
          )}
        </div>
        <button
          className="w-full rounded bg-[#e50914] text-white py-3 font-semibold"
          onClick={handleAction}
        >
          {title}
        </button>
        {title === "Sign In" ? (
          <div className="text-[gray]">
            New to Netflix?{" "}
            <Link to="/register" className="text-white hover:underline">
              Sign up now
            </Link>
          </div>
        ) : (
          <div className="text-[gray]">
            Already have account?{" "}
            <Link to="/login" className="text-white hover:underline">
              Sign in now
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
