import TodoListItem from './TodoListItem'

export default function TodoList({ list, onTodoRemove }) {
  return (
    <ul>
      {list.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onTodoRemove={onTodoRemove}
        />
      ))}
    </ul>
  );
}
