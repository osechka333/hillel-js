import * as React from 'react'

const defaultView = '___';

function LiftingUp() {
  const [animal, setAnimal] = React.useState('')
  const [name, setName] = React.useState('')

  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      <FavoriteAnimal name={animal} onAnimalChange={event => setAnimal(event.target.value)} />
      <Display name={name} animal={animal} />
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
      <label htmlFor="animal">Your Favorite Animal is: </label>
      <input id="animal" value={animal} onChange={onAnimalChange}/>
    </div>
  )
}

function Display({name, animal}) {
  if(name && animal) {
    return <div>{`Hey ${name}, your favorite animal is ${animal}!`}</div>
  } else {
    return <div>{`Hey ${defaultView}, your favorite animal is ${defaultView}!`}</div>
  }
}

export default LiftingUp