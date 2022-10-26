import React from "react";

export const Search = ({getCari}) => {
  return (
    <label htmlFor="" className="inline-block w-full">
      <input
        type="text"
        className="inputSearch"
        placeholder="Search a movie..."
        onChange={(e) => getCari(e.target.value)}
      />
    </label>
  );
};
