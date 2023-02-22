import { TodoItemApi } from '../../api/api'

export const ACTION_SET_LIST = 'setList';
export const ACTION_CREATE = 'create';
export const ACTION_DELETE = 'remove';
export const ACTION_EDIT = 'edit';
export const ACTION_STATUS_UPDATE = 'statusChange';
export const ACTION_SHOW_LOADER = 'loading';
export const ACTION_UPDATE = 'update';

export function getList () {
  return(dispatch) => {
    dispatch(loading())

    TodoItemApi
      .getList()
      .then((list => {
      dispatch(setList(list))
      })
    )
  }
}

export function saveRequest (item) {
  return (dispatch) => {
    dispatch(loading())

    if (item.id) {
      TodoItemApi
        .update(item.id, item)
        .then(() => {
          dispatch(update(item))
        })
    } else {
      TodoItemApi
        .create(item)
        .then((newItem) => {
          dispatch(create(newItem))
        })
    }
  }
}

export function setList (list) {
  return { type: ACTION_SET_LIST, payload: list }
}
export function loading () {
  return { type: ACTION_SHOW_LOADER, payload: true}
}
export function create (item) {
  return { type: ACTION_CREATE, payload: item }
}
export function edit (item) {
  return { type: ACTION_EDIT, payload: item }
}
export function update (item) {
  return { type: ACTION_UPDATE, payload: item }
}
export function updateStatus (item) {
  return { type: ACTION_STATUS_UPDATE, payload: item }
}
export function remove (item) {
  return { type: ACTION_DELETE, payload: item }
}
export function deleteRequest (id) {
  return (dispatch) => {
    dispatch(loading())

    TodoItemApi
      .delete(id)
      .then(() => {
        dispatch(remove(id));
      })
  }
}