export const TODO_CREATE_ACTION = 'create';
export const TODO_REMOVE_ACTION = 'remove';
export const TODO_EDIT_ACTION = 'edit';

export function create (todo) {
  return { type: TODO_CREATE_ACTION, payload: todo }
}
export function remove (id) {
  return { type: TODO_REMOVE_ACTION, payload: id }
}
export function edit (todo) {
  return { type: TODO_EDIT_ACTION, payload: todo }
}