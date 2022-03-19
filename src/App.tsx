import React from 'react';
import { Route } from 'react-router-dom';

import DesktopContainer from './Containers/home-container';
import MobileContainer from './Containers/mobile-container';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	const isTablet = useMediaQuery({
		minWidth: 768,
		maxWidth: 991
	});

	const whichContainer = isDesktop || isTablet ? DesktopContainer : MobileContainer;

	return (
		<div>
			<Route exact path="/" component={whichContainer} />
		</div>
	);
};

export default App;
