export const ACTION_CREATE = 'create';
export const ACTION_DELETE = 'remove';
export const ACTION_UPDATE = 'update';
export const ACTION_STATUS_UPDATE = 'statusChange';

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