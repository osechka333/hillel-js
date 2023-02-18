export const ACTION_COUNTER_SET = 'set'
export const ACTION_COUNTER_INCREMENT = 'increment'
export const ACTION_COUNTER_DECREMENT = 'decrement'

export function set (counts) {
  return { type: ACTION_COUNTER_SET, counts };
}
export function increment () {
  return { type: ACTION_COUNTER_INCREMENT };
}
export function decrement () {
  return { type: ACTION_COUNTER_DECREMENT };
}