import { useDispatch } from 'react-redux';
import { remove, update, updateStatus } from '../../store/actions/todo';

export default function TodoListItem ({ item }) {
  const dispatch = useDispatch();

  function onCheckBoxClick () {
    dispatch(updateStatus(item.id))
}

  function onDeleteButtonClick () {
    dispatch(remove(item.id))
  }

  function onEditButtonClick () {
    dispatch(update(item))
  }

  return (
    <li>
      <input type='checkbox'key={item.id} defaultChecked={item.done} onClick={ e => onCheckBoxClick(item)}/>
      {item.title}
      <button onClick={onEditButtonClick}>Change</button>
      <button onClick={onDeleteButtonClick}>Delete</button>
    </li>
  );
};
