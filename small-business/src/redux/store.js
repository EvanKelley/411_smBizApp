import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import listingReducer from './reducers/listingReducer';
import mapReducer from './reducers/mapReducer';

const rootReducer = combineReducers({
  user: userReducer,
  listings: listingReducer,
  map: mapReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;