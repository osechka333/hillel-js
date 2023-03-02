import {
  ACTION_COUNTER_DECREMENT,
  ACTION_COUNTER_INCREMENT,
  ACTION_COUNTER_SET
} from '../actions/counter'

const initialState = {
  counts: 0,
};

export default function counterReducer (state = initialState, { type, counts }) {
  switch (type) {
    case ACTION_COUNTER_SET: return { ...state, counts: Number(counts) };
    case ACTION_COUNTER_INCREMENT:  return { ...state, counts: state.counts += 1 };
    case ACTION_COUNTER_DECREMENT: return { ...state, counts: state.counts -= 1 };
    default: return state;
  }
}