import { useEffect, useState } from 'react'

export default function Clock () {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(tick, 1000)

    return () => clearInterval(intervalId)
  }, [])

  function tick () {
    setDate(new Date())
    console.log('from Clock setInterval')
  }

  return (
    <div>
      <h1>Clock on functional component!</h1>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  )
}