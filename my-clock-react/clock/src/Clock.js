import { useEffect, useState } from 'react'

export default function Clock() {
  const[date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(tick, 1000)

    return () => clearInterval(intervalId)
  }, [])

  function tick() {
    setDate(new Date())
    console.log('Tik Tok')
  }

  return (
    <div>
      <h2>{date.toLocaleDateString()}</h2>
    </div>
  )
}