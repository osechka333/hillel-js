import TodoListItem from './TodoListItem'
import { useSelector } from 'react-redux'

export default function TodoList({ list }) {
  const loading = useSelector(state => state.todo.loading)

  return (
    <>
      <h1>Todo List {loading ? <span>Loading...</span> : null}</h1>
      <ul>
        {list.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </>
  );
}
