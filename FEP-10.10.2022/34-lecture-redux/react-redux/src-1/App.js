import Input from './Counter/Input'
import Buttons from './Counter/Buttons'
import { useSelector } from 'react-redux'

function App () {
  const counts = useSelector(state => state.counter.counts);

  return (
    <>
      Counts: {counts}
      <Input />
      <Buttons />
    </>
  )
}

export default App