import React, { Component } from "react";
import PropTypes from "prop-types";
import preload from "../data.json";
import ShowCard from "./ShowCard";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  handleSearchTermChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>netflicks</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="search"
          />
        </header>

        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard show={show} key={show.imdbID} />)}
        </div>
      </div>
    );
  }
}

export default Search;
