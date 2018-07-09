import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <br />
      <Link to="/">Home</Link> -&nbsp;<Link to="/about">About</Link>
      <hr />
    </div>
  );
};

export default Header;
