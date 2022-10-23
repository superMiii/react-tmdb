import React from "react";

export const Search = () => {
  return (
    <label htmlFor="" className="inline-block w-full">
      <input
        type="text"
        className="inputSearch"
        placeholder="Search a movie..."
        // onChange={(e) => setRepeatPassword(e.target.value)}
      />
    </label>
  );
};
