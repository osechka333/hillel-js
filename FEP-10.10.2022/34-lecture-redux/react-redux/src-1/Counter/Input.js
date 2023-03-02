import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { set } from '../store/actions/counter'

export default function Input() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();

  function onSetBtnClick () {
    dispatch(set(value));
  }

  return (
    <>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type='text'
      />
      <button onClick={onSetBtnClick}>Set</button>
    </>
  )
}