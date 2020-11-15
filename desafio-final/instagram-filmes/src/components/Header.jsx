import React from 'react';
import Superman from '../img/superman.png';
import Batman from '../img/batman.png';

import '../styles/header.scss';

function Header() {
  return (
    <div className="menu">
      <div className="menu__profile">
        <img src={Superman} alt="superman" />
        <div className="profile__infos">
          <h2>Superman</h2>
          <p>20 posts</p>
          <p>20 curtidas</p>
          <p>20 comentários</p>
        </div>
      </div>
      <div className="menu__users">
        <h3>Visualizar timeline como:</h3>
        <div className="users__list">
          <div className="users__info">
            <img src={Batman} alt="" />
            <p>Batman</p>
          </div>
          <div className="users__info">
            <img src={Batman} alt="" />
            <p>Batman</p>
          </div>
          <div className="users__info">
            <img src={Batman} alt="" />
            <p>Batman</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
