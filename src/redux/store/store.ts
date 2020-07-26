import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas/movieSaga';
import { loadState,saveState } from '../localStorage/localStorage';

const persistedState = loadState();
const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer,persistedState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
store.subscribe(() => {
  saveState( store.getState());
});
export default store;