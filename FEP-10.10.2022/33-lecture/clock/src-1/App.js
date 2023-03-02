import Clock from './Clock'
import { useState } from 'react'

function App () {
  const [showClock, setShowClock] = useState(true);

  function onShowClockClick () {
    setShowClock(!showClock);
  }

  return (
    <>
      <button onClick={onShowClockClick}>Show Clock</button>

      {showClock ? <Clock /> : null}
    </>
  )
}

export default App