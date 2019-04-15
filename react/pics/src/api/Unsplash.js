import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
				Authorization: 'Client-ID 10413a5bd38b5229a2582c7309af0af89208e1ff147e1082c1326ab9f8aea26a'
			}
})
