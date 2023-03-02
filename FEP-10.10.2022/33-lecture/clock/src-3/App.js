import { useState } from 'react'
import ClockClass from './ClockClass'

function App () {
  const [showClock, setShowClock] = useState(true);

  function onShowClockClick () {
    setShowClock(!showClock);
  }

  return (
    <>
      <button onClick={onShowClockClick}>Show / Hide Clock</button>

      {showClock ? <ClockClass a='b' /> : null}
    </>
  )
}

export default App