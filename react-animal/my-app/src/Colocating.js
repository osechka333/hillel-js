import * as React from 'react'

function Colocating() {
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      <Name/>
      <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)}/>
      <Display animal={animal} />
    </form>
  )
}

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Type a favorite animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange}/>
    </div>
  )
}

function Display({animal}) {
  return <div>{`Your favorite animal is ${animal}!`}</div>
}

export default Colocating