export const ACTION_CREATE = 'create';
export const ACTION_DELETE = 'remove';
export const ACTION_UPDATE = 'update';

export function create (item) {
  return { type: ACTION_CREATE, payload: item }
}
export function remove (item) {
  return { type: ACTION_DELETE, payload: item }
}
export function update (item) {
  return { type: ACTION_UPDATE, payload: item }
}