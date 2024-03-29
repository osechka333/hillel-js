import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers'
import { composeWithDevTools } from '@redux-devtools/extension';

// export const store  = createStore(rootReducer);

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    // applyMiddleware(...middleware)
    // other store enhancers if any
  )
);