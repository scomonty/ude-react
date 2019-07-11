import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () =>
	// the redux thunk
	async dispatch => {
	const response = await jsonPlaceholder.get('/posts')
	dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

export const fetchUser = id =>
async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({ type: 'FETCH_USER', payload: response.data })
}

// use memoize from lodash to make the api call only once
const _fetchUser = _.memoize(async (id, dispatch) => {

})


/*
export const fetchUser = (id) =>
dispatch => {
	// call our memoized function to fetch user
	_fetchUser(id, dispatch);
}

// use memoize from lodash to make the api call only once
const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({ type: 'FETCH_USER', payload: response.data })
})
*/
