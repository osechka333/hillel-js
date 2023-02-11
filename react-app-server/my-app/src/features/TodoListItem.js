export default function TodoListItem ({ todo, onTodoRemove, onTodoEdit, onCheckBoxClick}) {
    function onRemoveBtnClick() {
        onTodoRemove(todo.id);
    }
    function onEditBtnClick() {
        onTodoEdit(todo);
    }
    function onDoneChange() {
        onCheckBoxClick(todo);
    }
    return (
        <li>
            <input type='checkbox' defaultChecked={todo.done} onChange={onDoneChange}/>
            {todo.title}
            <button onClick={onEditBtnClick}>Edit</button>
            <button onClick={onRemoveBtnClick}>Remove</button>
        </li>
    );
}