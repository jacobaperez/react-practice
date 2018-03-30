// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { setSearchTerm } from "./actionCreators";
import type { RouterHistory } from "react-router-dom";

class Landing extends Component {
  props: { searchTerm: string, handleSearchTermChange: Function, history: RouterHistory };

  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push("/search");
  };

  render() {
    return (
      <div className="landing">
        <h1>netflicks</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="search"
          />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
