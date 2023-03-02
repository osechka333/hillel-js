import { useState } from 'react'

export default function Header({ onTodoSubmit }) {
  const [title, setTitle] = useState('')

  function onFormSubmit () {
    const newTodo = {
      title,
      done: false,
      id: Math.random().toString(),
    };
    onTodoSubmit(newTodo);
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
