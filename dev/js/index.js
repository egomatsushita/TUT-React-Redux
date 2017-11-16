import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux' // 1. wil only import the function createStore from redux

// 3. a reducer is a function that says what data is supposed to save in our store
// 4. create a reducers dir
// 5. create a reducer-users.js inside reducers dir

const store = createStore(); // 2. store is all the data of the entire application

ReactDOM.render(<h1>Hey now</h1>, document.getElementById('root'));
