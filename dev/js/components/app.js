import React from 'react';
require('../../scss/style.scss');
import UsersList from '../containers/users-list.js';

const App = () => (
  <div>
    <h2>Username List:</h2>
    <UsersList />
    <hr />
    <h2>User Details:</h2>
  </div>
);

export default App;