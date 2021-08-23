import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Bookstore CMS</h1>

    <ul>
      <li><Link exact to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>

    <div>
      <i className="fas fa-user" />
    </div>
  </div>
);

export default Header;
