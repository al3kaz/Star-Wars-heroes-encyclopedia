import { combineReducers } from 'redux';
import tokenReducer from './auth-token/token.reducer';
import heroReducer from './heroes/heroes.reducer';


export default combineReducers({
  heroes: heroReducer,
  tokens: tokenReducer,
});