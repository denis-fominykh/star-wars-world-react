import React from 'react';

import './Header.scss';

export const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="/#">
          The Star Wars World
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="/#">People</a>
        </li>
        <li>
          <a href="/#">Planets</a>
        </li>
        <li>
          <a href="/#">Starships</a>
        </li>
      </ul>
    </div>
  );
};
