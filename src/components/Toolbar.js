import React from "react";
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className="header">
          <Link to="/">Index</Link>
          <Link to="/home">For Talents</Link>
          <Link to="/it-hiring">For Employers</Link>
          <Link to="/about">About</Link>
          <Link to="/sign-up">Sign Up</Link>
        </div>

    );

};

export default Toolbar;