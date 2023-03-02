import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt';

export default function Tilt () {
  const myDivRef = useRef()

  useEffect(() => {
    const myDiv = myDivRef.current

    VanillaTilt.init(myDiv, {
      max: 25,
      speed: 400
    });

    return () => myDiv.vanillaTilt.destroy();
  }, [])

  return (
    <div ref={myDivRef}>XXX</div>
  )
}