import React, {Component} from 'react';

class Item extends Component{
	render(){
		return(
			<div className="row">
				<div className="col">
					<img src={'https://d1xwtr0qwr70yv.cloudfront.net/assets/tech/react-7b90239e805d8b06ca263be745f8ad5f.svg'} className="img-fluid img-thumbnail" alt="Responsive image"/>
				</div>
				<div className="col">
					<h3>Name</h3>
					<p>Tagline</p>
					<p>Body text</p>
				</div>
			</div>
		);
	}
}

export default Item;