import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Listing from '../components/Listing';
import Details from '../components/Details';
import Login from '../components/Login';
import LoggedInListing from '../components/LoggedInListing';
import AddListing from '../components/AddListing';
import PrivateRoute from './PrivateRoute';
import businesses from '../data/businesses'; // Import your business data

const AppRouter = ({ isAuthenticated }) => {
  const [businessList, setBusinessList] = useState([]);

  // Fetch your business data when the component mounts
  useEffect(() => {
    setBusinessList(businesses);
  }, []);

  return (
    <Router>
      <Switch>
        {/* Public Routes */}
        <Route path="/" exact render={() => <Listing businessList={businessList} />} />
        <Route
          path="/details/:id"
          render={(props) => <Details {...props} businessList={businessList} />}
        />
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


