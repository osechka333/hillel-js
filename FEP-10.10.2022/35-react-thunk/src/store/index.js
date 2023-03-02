import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers'
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk)
    // other store enhancers if any
  )
);

// store.dispatch() -> logger -> todoReducer()
// store.dispatch({ type: '?', }) -> thunk (ignore) -> todoReducer()
// store.dispatch(fn () => {}) -> thunk (call (dispatch) => fn(dispatch)) -> todoReducer()
// dispatch(login()) return fn() -> thunk(), make asyn call, dispatch({}) -> todoReducer()