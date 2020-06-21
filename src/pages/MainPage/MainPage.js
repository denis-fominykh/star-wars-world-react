import React from 'react';

import './MainPage.scss';
import swPosters from '../../img/sw-4-6-posters.png';

const MainPage = () => {
	return (
		<div className="main-page">
			<h2 className="heading-text">Welcome to Star Wars World!</h2>
			<img className="posters" src={swPosters} alt="posters"/>
		</div>
	);
}

export default MainPage;
