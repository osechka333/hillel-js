import { useEffect, useRef } from 'react'

export default function DivRef () {
  const myDivRef = useRef()

  useEffect(() => {
    const myDiv = myDivRef.current

    myDiv.style.color = 'red';

    console.log(myDiv);
  }, [])

  return (
    <div ref={myDivRef}>XXX</div>
  )
}