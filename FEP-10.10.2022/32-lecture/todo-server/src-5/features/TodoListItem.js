export default function TodoListItem ({ todo, onTodoRemove }) {
  function onRemoveBtnClick () {
    onTodoRemove(todo.id);
  }

  return (
    <li>
      <input type='checkbox'/>
      {todo.title}
      <button>Edit</button>
      <button onClick={onRemoveBtnClick}>Remove</button>
    </li>
  );
}
