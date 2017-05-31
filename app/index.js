import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './Root';
import routes from './routes';

const render = (appRoutes) => {
	ReactDOM.render(
		<AppContainer>
			<Root routes={appRoutes} />
		</AppContainer>,
		document.getElementById('app')
	);
}

render(routes);

if(module.hot){
	module.hot.accept('./routes', () => {
		render(routes);
	});
}