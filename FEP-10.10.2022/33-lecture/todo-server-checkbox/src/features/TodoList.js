import TodoListItem from './TodoListItem'

export default function TodoList({
  list,
  onTodoRemove,
  onTodoEdit,
  onDoneChange,
}) {
  return (
    <ul>
      {list.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onTodoRemove={onTodoRemove}
          onTodoEdit={onTodoEdit}
          onDoneChange={onDoneChange}
        />
      ))}
    </ul>
  );
}
