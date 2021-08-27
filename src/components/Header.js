import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header flex-row">
    <h1>Bookstore CMS</h1>

    <ul className="menu flex-row">
      <li><NavLink exact to="/">Books</NavLink></li>
      <li><NavLink to="/categories">Categories</NavLink></li>
    </ul>

    <div className="avatar">
      <i className="fas fa-user" />
    </div>
  </div>
);

export default Header;
