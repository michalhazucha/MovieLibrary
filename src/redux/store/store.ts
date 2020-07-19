import { createStore, applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { saveState, loadState } from '../localStorage/localStorage';
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootSaga from '../sagas/movieSaga';
const sagaMiddleware = createSagaMiddleware(); 
const persistedState = loadState();
const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
store.subscribe(() => {
  saveState(store.getState());
});

export default store;