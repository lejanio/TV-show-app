import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="show--container">
    <nav>
      <Link to="/" className="link">&lt; Back to search</Link>
    </nav>
    <div className="error-message--container">
      <span className="error-message">404 - Page not found</span>
    </div>
  </div>
);

export default NotFound;
