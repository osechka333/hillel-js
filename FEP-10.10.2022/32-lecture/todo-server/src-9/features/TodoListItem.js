export default function TodoListItem ({ todo, onTodoRemove, onTodoEdit }) {
  function onRemoveBtnClick () {
    onTodoRemove(todo.id);
  }

  function onEditBtnClick () {
    onTodoEdit(todo);
  }

  return (
    <li>
      <input type='checkbox'/>
      {todo.title}
      <button onClick={onEditBtnClick}>Edit</button>
      <button onClick={onRemoveBtnClick}>Remove</button>
    </li>
  );
}
