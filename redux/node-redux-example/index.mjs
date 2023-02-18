import { createStore } from 'redux';

const ACTION_COUNTER_SET = 'set';
const ACTION_COUNTER_INCREMENT = 'increment';
const ACTION_COUNTER_DECREMENT = 'decrement';

const initialState  = {
  counts: 0
};

//reducer function - change the state

function rootReducer(state= initialState, {type, counts}) {
  switch(type) {
    case ACTION_COUNTER_SET:  return { ...state, counts: counts};
    case ACTION_COUNTER_INCREMENT:  return { ...state, counts: state.counts += 1};
    case ACTION_COUNTER_DECREMENT: return { ...state, counts: state.counts -= 1};
    default: return state;
  }
};

const store = createStore(rootReducer);
  // if(action.type === 'set') {
  //   return { ...state, counts: action.counts}
  // } else if(action.type === 'increment') {
  //   return { ...state, counts: state.counts += 1}
  // } else if(action.type === 'decrement') {
  //   return { ...state, counts: state.counts -= 1}
  // }

store.dispatch({type: ACTION_COUNTER_SET, counts: 1});
store.dispatch({type: ACTION_COUNTER_INCREMENT});
store.dispatch({type: ACTION_COUNTER_DECREMENT});

console.log(store.getState());

// dispatch - send data - and update it
// type - to determine the type of the action
// return {...state, counts: action.counts}; //new object with added state
// return ONLY NEW ARRAY


// store - store data
// dispatcher - send data
// action - type and data (props)
// reducer - change state