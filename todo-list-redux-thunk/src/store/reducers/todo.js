import {
  ACTION_CREATE,
  ACTION_DELETE, ACTION_SET_LIST, ACTION_STATUS_UPDATE,
  ACTION_UPDATE
} from '../actions/todo'

const DEFAULT_ITEM_CONTENT = {
  title: '',
  done: false,
}
const initialState = {
  list: [],
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
    case ACTION_STATUS_UPDATE:
      const updatedItem = state.list.find(item => item.id === payload)
      const done = !(updatedItem.done);
      updatedItem.done = done
      return { ...state, list: state.list.map(todoItem => todoItem.id === payload ? updatedItem : todoItem)};
    case ACTION_SET_LIST: return { ...state, list: payload};

    default: return state;
  }
}