import clock from './clock_icon.jpg';
import './App.css';
import { useState } from 'react'
import ClockClass from './ClockClass'

function App() {
  const [showClock, setShowClock] = useState(true);

  function onShowClockClick() {
    setShowClock(!setShowClock);
  }
  return (
    <div className="App">
        <img src={clock} className="app-clock" alt="clock" />
        <button onClick={onShowClockClick}>Show/Hide Time</button>
        {showClock ? <ClockClass a='b'/> : null}
        <p>
          World timezones
        </p>
    </div>
  );
}

export default App;
