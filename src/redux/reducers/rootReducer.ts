import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
});
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;