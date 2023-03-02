import { useSelector } from 'react-redux'
import Input from './Input'
import Buttons from './Buttons'

export default function Counter() {
  const counts = useSelector(state => state.counter.counts);

  return (
    <>
      Counts: {counts}
      <Input />
      <Buttons />
    </>
  )
}
