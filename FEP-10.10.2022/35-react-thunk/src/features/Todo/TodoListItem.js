import { useDispatch } from 'react-redux'
import { edit, removeRequest } from '../../store/actions/todo'

export default function TodoListItem ({ todo }) {
  const dispatch = useDispatch();


  function onRemoveBtnClick () {
    dispatch(removeRequest(todo.id));
  }

  function onEditBtnClick () {
    dispatch(edit(todo))
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
