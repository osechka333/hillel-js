import { useState } from 'react'
import DivRef from './DivRef'

function App () {
  const [showClock, setShowClock] = useState(true);

  function onShowClockClick () {
    setShowClock(!showClock);
  }

  return (
    <>
      <button onClick={onShowClockClick}>Show / Hide Clock</button>

      {showClock ? <DivRef a='b' /> : null}
    </>
  )
}

export default App