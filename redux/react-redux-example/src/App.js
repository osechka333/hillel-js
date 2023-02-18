import { useSelector } from 'react-redux'
import Counter from './features/Counter'
import Todo from './features/Todo'

function App () {
  const counts = useSelector(state => state.counter.counts);

  return (
    <>
      <Counter />
      <Todo />
    </>
  )
}

export default App