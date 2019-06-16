import React from 'react';
import {NavLink} from 'react-router-dom';

import './style.scss';

function Header () {

  return (
    <div className="header">
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/favorite">Favorite</NavLink></li> 
      </ul>
      
    </div>
  );
}

export default Header;
