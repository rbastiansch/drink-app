import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import List from './components/List';
import Item from './components/Item';

const routes = () => {
	return (
		<Route path="/" component={App}>
			<IndexRoute component={List} />
			<Route path="/item" component={Item} />	
		</Route>
	);
}

export default routes;