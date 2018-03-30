// @flow

import React from "react";
import PropTypes from "prop-types";
import ShowCard from "./ShowCard";
import Header from "./Header";
import { connect } from "react-redux";

const Search = (props: { searchTerm: string, shows: Array<Show> }) => {
  return (
    <div className="search">
      <Header showSearch />
      <div>
        {props.shows
          .filter(
            show =>
              `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(props.searchTerm.toUpperCase()) >= 0
          )
          .map(show => <ShowCard {...show} key={show.imdbID} />)}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export default connect(mapStateToProps)(Search);
