import {
  ACTION_CREATE,
  ACTION_DELETE,
  ACTION_UPDATE
} from '../actions/todo'

const DEFAULT_ITEM_CONTENT = {
  title: '',
  done: false,
}
const initialState = {
  list: [
    { 'title': 'item 1', 'status': true, 'done': true, 'id': '1' },
    { 'title': 'item 2', 'status': true, 'done': false, 'id': '2' },
    { 'title': 'item 3', 'status': true, 'done': true, 'id': '3' },
    { 'title': 'item 4', 'status': true, 'done': false, 'id': '4' }
  ],
  editItem: DEFAULT_ITEM_CONTENT,
}

export default function todoReducer (state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_CREATE:
      if (state.editItem.id) {
        const newList = state.list.map(item => item.id === state.editItem.id ? payload : item);

        return {
          list: newList,
          editItem: DEFAULT_ITEM_CONTENT,
        }
      } else {
        return { ...state, list: [ ...state.list, payload ] }
      }
    case ACTION_DELETE: return { ...state, list: state.list.filter(item => item.id !== payload) }
    case ACTION_UPDATE: return { ...state, editItem: payload }
    default: return state;
  }
}