import {combineReducers} from 'redux'; // import combineReducers function from redux
import UserReducer from './reducer-users'; // import the array of users returned from reducer-users
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
});

export default allReducers;