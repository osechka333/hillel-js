import { useState } from 'react'

export default function Clock () {
  const [date, setDate] = useState(new Date())

  setInterval(() => {
    setDate(new Date());
    console.log('from Clock setInterval')
  }, 1000)

  return (
    <div>
      <h1>Clock on functional component!</h1>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );
}