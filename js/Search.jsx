import React from 'react';
import data from '../data.json';
import ShowCard from './ShowCard';

const Search = props => {
  return (
    <div className="search">
      {data.shows.map(show => <ShowCard {...show} key={show.imdbID} />)}
    </div>
  );
};

export default Search;
