import { useEffect, useState } from 'react'

export default function Header({ onTodoSubmit, todo }) {
  const [title, setTitle] = useState(todo?.title ?? '');

  useEffect(() => {
    console.log('useEffect called')
    setTitle(todo.title);
  }, [todo])

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
