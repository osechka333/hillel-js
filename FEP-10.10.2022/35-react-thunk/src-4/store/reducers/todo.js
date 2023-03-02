import {
  TODO_CREATE_ACTION,
  TODO_EDIT_ACTION,
  TODO_LOADING_ACTION,
  TODO_REMOVE_ACTION,
  TODO_SET_LIST_ACTION
} from '../actions/todo'


const DEFAULT_TODO = {
  title: '',
  done: false,
}
const initialState = {
  list: [
    // { 'title': 'ipsam XXX', 'status': true, 'done': false, 'id': '1' },
    // { 'title': 'ratione nam alias', 'status': true, 'done': false, 'id': '2' },
    // { 'title': 'atque non dolore', 'status': true, 'done': true, 'id': '3' },
    // { 'title': 'in quos exercitationem', 'status': true, 'done': false, 'id': '4' },
    // { 'title': 'quia perferendis ipsam', 'status': true, 'done': false, 'id': '5' },
    // { 'title': 'commodi harum commodi', 'status': false, 'done': false, 'id': '6' },
    // { 'title': 'ipsam occaecati nulla', 'status': false, 'done': false, 'id': '7' },
    // { 'title': 'nemo soluta tempora', 'status': false, 'done': false, 'id': '8' },
  ],
  editTodo: DEFAULT_TODO,
  loading: false,
}

export default function todoReducer (state = initialState, { type, payload }) {
  switch (type) {
    case TODO_CREATE_ACTION:
      if (state.editTodo.id) { // edit
        const newList = state.list.map(todo => todo.id === state.editTodo.id ? payload : todo);

        return {
          list: newList,
          editTodo: DEFAULT_TODO,
        }
      } else { // create
        return { ...state, list: [ ...state.list, payload ] }
      }
    case TODO_REMOVE_ACTION: return { ...state, list: state.list.filter(todo => todo.id !== payload) }
    case TODO_EDIT_ACTION: return { ...state, editTodo: payload }
    case TODO_SET_LIST_ACTION: return { ...state, list: payload, loading: false }
    case TODO_LOADING_ACTION: return { ...state, loading: payload }
    default: return state;
  }
}