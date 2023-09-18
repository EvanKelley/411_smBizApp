
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link to homepage */}
        </li>
        <li>
          <Link to="/listing">Listing</Link> {/* Link to Listing Screen */}
        </li>
        <li>
          <Link to="/login">Login</Link> {/* Link to Login Screen */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
