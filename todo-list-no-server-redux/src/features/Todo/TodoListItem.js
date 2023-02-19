import { useDispatch } from 'react-redux'
import { remove, update } from '../../store/actions/todo'

export default function TodoListItem ({ item }) {
  const dispatch = useDispatch();


  function onDeleteButtonClick () {
    dispatch(remove(item.id));
  }

  function onEditButtonClick () {
    dispatch(update(item))
  }

  return (
    <li>
      <input type='checkbox'/>
      {item.title}
      <button onClick={onEditButtonClick}>Change</button>
      <button onClick={onDeleteButtonClick}>Delete</button>
    </li>
  );
}