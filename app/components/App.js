import React, {Component} from 'react';
import { Link } from 'react-router';

class App extends Component {
	render(){
		return(
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
				  <div className="container">
				    <h1 className="display-3 d-flex justify-content-center">
				    	<Link to="/" className="nav-link">Drink APP</Link>
				    </h1>
				    <p className="lead d-flex justify-content-center">This is an application to search some beers from an API.</p>
				  </div>
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default App;