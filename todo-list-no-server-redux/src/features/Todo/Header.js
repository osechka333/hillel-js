import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create } from '../../store/actions/todo'

export default function Header() {
  const item = useSelector(state => state.item.editItem)
  const [title, setTitle] = useState(item?.title ?? '');
  const sendingData = useDispatch();

  useEffect(() => {
    setTitle(item.title);
  }, [item])

  function onFormSubmit (e) {
    e.preventDefault()

    const newTodo = {
      id: Math.random().toString(),
      ...item,
      title,
    };
    sendingData(create(newTodo))
    setTitle('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='title'>Title</label>
      <input type='text' id='title' value={title} onChange={e => setTitle(e.target.value)}
      />
    </form>
  );
}