import { TodoItemApi } from '../../api/api'

export const ACTION_SET_LIST = 'setList';
export const ACTION_CREATE = 'create';
export const ACTION_DELETE = 'remove';
export const ACTION_UPDATE = 'update';
export const ACTION_STATUS_UPDATE = 'statusChange';

export function getList () {
  return(dispatch) => {
    TodoItemApi
      .getList()
      .then((list => {
      dispatch(setList(list))
      })
    )
  }
}

export function setList (list) {
  return { type: ACTION_SET_LIST, payload: list }
}
export function create (item) {
  return { type: ACTION_CREATE, payload: item }
}
export function remove (item) {
  return { type: ACTION_DELETE, payload: item }
}
export function update (item) {
  return { type: ACTION_UPDATE, payload: item }
}
export function updateStatus (item) {
  return { type: ACTION_STATUS_UPDATE, payload: item }
}