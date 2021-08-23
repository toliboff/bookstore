import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Bookstore CMS</h1>

    <ul>
      <li><NavLink exact to="/">Books</NavLink></li>
      <li><NavLink to="/categories">Categories</NavLink></li>
    </ul>

    <div>
      <i className="fas fa-user" />
    </div>
  </div>
);

export default Header;
