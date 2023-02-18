import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/actions/counter'

export default function Buttons() {
  const dispatch = useDispatch();

  function onIncBtnClick () {
    dispatch(increment());
  }

  function onDecBtnClick () {
    dispatch(decrement());
  }

  return (
    <>
      <button onClick={onIncBtnClick}>Incremtn</button>
      <button onClick={onDecBtnClick}>Decremtn</button>
    </>
  )
}