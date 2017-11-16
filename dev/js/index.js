import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux' ;
import allReducers from './reducers';
import {Provider} from 'react-redux';
import App from './components/app.js';

// 1. import createdStore function from from redux
// 2. const store is all the data of the entire application
// 3. a reducer is a function that says what data is supposed to save in our store
// 4. create a reducers directory
// 5. create a reducer-users.js inside reducers directory
// 6. create index.js inside reducers directory to combine all the reducers in a big object
// 7. import all combined reducers (allReducers) from ./reducers/index.js
// 8. create a components directory inside js directory
// 9. create a App.js inside components directory
// 10. import Provider object from react-redux
// 11. import App from ./components/app.js
// 12. render the Provider tag with an store attribute set to store value. This store will be avaiable to all components
// 13. add App tag inside Provider tag

const store = createStore(allReducers); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
