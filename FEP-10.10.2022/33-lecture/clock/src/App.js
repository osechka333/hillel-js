import { useState } from 'react'
import Tilt from './Tilt'

function App () {
  const [showClock, setShowClock] = useState(true);

  function onShowClockClick () {
    setShowClock(!showClock);
  }

  return (
    <>
      <button onClick={onShowClockClick}>Show / Hide Clock</button>

      {showClock ? <Tilt a='b' /> : null}
    </>
  )
}

export default App