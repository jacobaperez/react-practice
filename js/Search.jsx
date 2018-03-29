import React from "react";
import PropTypes from "prop-types";
import preload from "../data.json";
import ShowCard from "./ShowCard";

const Search = props => (
  <div className="search">
    {preload.shows.map(show => <ShowCard show={show} key={show.imdbID} />)}
  </div>
);

export default Search;
