import { useEffect, useState } from 'react'

export default function Header ({ onTodoSubmit, todo }) {
  const [title, setTitle] = useState(todo?.title ?? '')

  useEffect(() => {
    setTitle(todo.title)
  }, [todo])

  function onFormSubmit () {
    const newTodo = {
      ...todo,
      title
    }
    onTodoSubmit(newTodo)
    setTitle('')
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
  )
}
