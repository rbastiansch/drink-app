import axios from 'axios';

const Beers = {
	getBeers(){
		return axios.get('https://api.punkapi.com/v2/beers');
	}
}

export default Beers;