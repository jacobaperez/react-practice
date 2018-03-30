// @flow
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchTerm } from "./actionCreators";

const Header = (props: {
  showSearch?: boolean,
  handleSearchTermChange?: Function,
  searchTerm?: string
}) => {
  let utilSpace;

  if (props.showSearch) {
    utilSpace = (
      <input
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
        type="text"
        placeholder="search"
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }

  return (
    <header>
      <h1>
        <Link to="/">netflicks</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {},
  searchTerm: ""
};

export default Header;
