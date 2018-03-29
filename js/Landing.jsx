import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Landing = props => {
  return (
    <div className="landing">
      <h1>Mini Netflix</h1>
      <input type="text" placeholder="search" />
      <Link to="/search">or Browse All</Link>
    </div>
  );
};

export default Landing;
