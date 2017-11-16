import {combineReducers} from 'redux'; // import combineReducers function from redux
import UserReducer from './reducer-users'; // import the array of users returned from reducer-users

const allReducers = combineReducers({
  users: UserReducer
});

export default allReducers;