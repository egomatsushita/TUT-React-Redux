import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux' 
import allReducers from './reducers'

// 1. import createdStore function from from redux
// 2. const store is all the data of the entire application
// 3. a reducer is a function that says what data is supposed to save in our store
// 4. create a reducers directory
// 5. create a reducer-users.js inside reducers directory
// 6. create index.js inside reducers directory to combine all the reducers in a big object
// 7. import all combined reducers (allReducers) from ./reducers/index.js

const store = createStore(allReducers); 

ReactDOM.render(<h1>Hey now</h1>, document.getElementById('root'));
