import React from 'react';
import { Route } from 'react-router-dom';

import DesktopContainer from './Containers/home-container';
import MobileContainer from './Containers/mobile-container';
import './App.css';
import { useMediaQuery } from 'react-responsive';

const App = () => {
	const isDesktop = useMediaQuery({ minWidth: 992 });

	const whichContainer = isDesktop ? DesktopContainer : MobileContainer;

	return (
		<div>
			<Route exact path="/" component={whichContainer} />
		</div>
	);
};

export default App;
