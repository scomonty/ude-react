import { combineReducers } from 'redux';
import postReducer from './postReducer';
import usersReducer from './usersReducer'


export default combineReducers({
	posts: postReducer,
	users: usersReducer
})

/*
export default combineReducers({
	//dummy reducer to trick redux and remove error when first starting to build project
	dummy: () => 0
});
*/
