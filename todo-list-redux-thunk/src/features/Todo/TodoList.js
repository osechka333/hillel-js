import TodoListItem from './TodoListItem'
import { useSelector } from 'react-redux'

export default function TodoList({ list }) {
  const loading = useSelector(state => state.item.loading)

  return (
    <>
      <h1>List of to-do items: {loading ? <span>Data are uploading...</span> : null}</h1>
      <ul>
        {list.map(item => (<TodoListItem key={item.id} item={item}/>))}
      </ul>
    </>
  );
}