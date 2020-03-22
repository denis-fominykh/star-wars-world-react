import React from 'react';

import './ErrorIndicator.scss';
import deathStarIcon from './death-star.png';

export const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img className="error-icon" src={deathStarIcon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  )
}
