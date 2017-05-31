import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Section from './components/Section';

const routes = () => {
	return (
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path='section' component={Section} />			
		</Route>
	);
}

export default routes;