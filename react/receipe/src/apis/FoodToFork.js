import axios from 'axios';
const KEY = 'ce74dc883213d736dbd92ae8d48bd050';
const destination = 'https://www.food2fork.com/api/search';


export default axios.create({
	baseURL: destination,
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
