import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import listingReducer from './reducers/listingReducer';
import mapReducer from './reducers/mapReducer';
import businessesReducer from './reducers/businessesReducer'; // Import your businesses reducer

const rootReducer = combineReducers({
  user: userReducer,
  listings: listingReducer,
  map: mapReducer,
  businesses: businessesReducer, // Include the businesses reducer in your store
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

