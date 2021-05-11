import React from 'react';
import { Link } from 'react-router-dom';
import { EmptyNotFound } from './EmptyNotFound';


const PageNotFound = () => (
  <div className="container">
    <EmptyNotFound />
    <Link to="/">
      Go Home
    </Link>
    <h1>404 - Not Found!</h1>
  </div>
);

export default PageNotFound;