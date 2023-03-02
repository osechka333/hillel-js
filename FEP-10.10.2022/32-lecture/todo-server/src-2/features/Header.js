import { useState } from 'react'

export default function Header(props) {
  const [title, setTitle] = useState('')

  function onFormSubmit () {
    console.log(title)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='title'>Title</label>
      <input
        type='text'
        id='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </form>
  );
}
