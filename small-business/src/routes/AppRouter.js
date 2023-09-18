import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Listing from '../components/Listing';
import Details from '../components/Details';
import Login from '../components/Login';
import LoggedInListing from '../components/LoggedInListing';
import AddListing from '../components/AddListing';
import PrivateRoute from './PrivateRoute';

const AppRouter = ({ isAuthenticated }) => {
  return (
    <Router>
      <Switch>
        {/* Public Routes */}
        <Route path="/" exact component={Listing} />
        <Route path="/details/:id" component={Details} />
        <Route path="/login" component={Login} />

        {/* Protected Routes */}
        <PrivateRoute
          path="/loggedinlisting"
          component={LoggedInListing}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/add"
          component={AddListing}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;

