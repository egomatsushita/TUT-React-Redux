import React from 'react';
require('../../scss/style.scss');
import UsersList from '../containers/users-list.js';
import UserDetails from '../containers/user-details.js';

const App = () => (
  <div>
    <h2>Username List:</h2>
    <UsersList />
    <hr />
    <h2>User Details:</h2>
    <UserDetails />
  </div>
);

export default App;