export default function TodoListItem ({
  todo,
  onTodoRemove,
  onTodoEdit,
  onDoneChange,
}) {
  function onRemoveBtnClick () {
    onTodoRemove(todo.id);
  }

  function onEditBtnClick () {
    onTodoEdit(todo);
  }

  function noDoneChange () {
    onDoneChange(todo);
  }

  return (
    <li>
      <input
        type='checkbox'
        checked={todo.done}
        onChange={noDoneChange}
      />
      {todo.title}
      <button onClick={onEditBtnClick}>Edit</button>
      <button onClick={onRemoveBtnClick}>Remove</button>
    </li>
  );
}
