import React, {Component} from 'react';
import Beers from '../services/Beers';
import { Link } from 'react-router';

class List extends Component{
	constructor(){
		super();
		this.state = {
			beers: [],
			searchString: '',
		};

		this.updateBeers = this.updateBeers.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	updateBeers(){
		Beers.getBeers().then((response) => {
			this.setState({
				beers: response.data,
			});
		})
	}
	handleSearch(e){
		e.preventDefault();
		this.updateBeers();
	}
	handleChange(e){
		this.setState({searchString: e.target.value});
	}
	componentDidMount(){
		this.updateBeers();
	}

	render(){
		const beersList = this.state.beers.map((beer, key) => {
			if(beer.name.includes(this.state.searchString)){
				return (
					<tbody key={key}>
						<tr>
						    <td>{beer.name}</td>
						    <td>{beer.tagline}</td>
						</tr>
					</tbody>
				);
			}

		});

		return(
			<div>
				<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				  <a className="navbar-brand">Navbar</a>
				  <div>
					  <form className="form-inline">
					    <input className="form-control mr-sm-2" type="text" placeholder="Search" value={this.state.searchString} onChange={this.handleChange}/>
					    <button className="btn btn-outline-primary my-2 my-sm-0" onClick={this.handleSearch}>Search</button>
					  </form>
				  </div>
				</nav>
				<table className="table table-hover">
				  <thead>
				    <tr>
				      <th>Name</th>
				      <th>Tagline</th>
				    </tr>
				  </thead>
				  {beersList}
				</table>
			</div>
		);
	}
}

export default List;