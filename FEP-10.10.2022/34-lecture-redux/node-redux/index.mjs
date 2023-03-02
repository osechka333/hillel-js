import { createStore } from 'redux';

const ACTION_COUNTER_SET = 'set'
const ACTION_COUNTER_INCREMENT = 'increment'
const ACTION_COUNTER_DECREMENT = 'decrement'
const initialState = {
  counts: 0,
};

function rootResucer (state = initialState, { type, counts }) {
  switch (type) {
    case ACTION_COUNTER_SET: return { ...state, counts };
    case ACTION_COUNTER_INCREMENT:  return { ...state, counts: state.counts += 1 };
    case ACTION_COUNTER_DECREMENT: return { ...state, counts: state.counts -= 1 };
    default: return state;
  }
}

const store  = createStore(rootResucer);

function set (counts) {
  return { type: ACTION_COUNTER_SET, counts };
}
function increment () {
  return { type: ACTION_COUNTER_INCREMENT };
}
function decrement () {
  return { type: ACTION_COUNTER_DECREMENT };
}

store.dispatch(set(1))
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())

console.log(store.getState())