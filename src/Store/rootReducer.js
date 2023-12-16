// Combine reducer to combine all reducers import from Redux
import { combineReducers } from 'redux';

// Importing all Reducers
import filterSlice from './filterSlice';

const rootReducer = combineReducers({
  filterSlice,
});

export default rootReducer;
