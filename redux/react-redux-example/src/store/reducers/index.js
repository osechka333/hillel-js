import { combineReducers } from 'redux'
import counterReducer from './counter'
import todoReducer from './todo'

export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer
});