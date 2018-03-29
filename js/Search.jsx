// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";
import ShowCard from "./ShowCard";
import Header from "./Header";

class Search extends Component {
  state = {
    searchTerm: ""
  };
  // For typing
  props: {
    shows: Array<Show>
  };

  handleSearchTermChange = (
    e: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="search">
        <Header
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
        />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard {...show} key={show.imdbID} />)}
        </div>
      </div>
    );
  }
}

export default Search;
