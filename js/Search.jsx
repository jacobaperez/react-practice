import React from "react";
import data from '../data.json';

const Search = props => {
  return (
    <div className="search">
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
};

export default Search;
