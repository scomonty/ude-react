import axios from 'axios';
const KEY = 'AIzaSyANOeM3A3LDMiCy0Ucf4pMEG6dCr1qzlU4';


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
