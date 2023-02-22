import { useDispatch } from 'react-redux'
import { deleteRequest, edit, saveRequest, updateStatus } from '../../store/actions/todo'

export default function TodoListItem ({ item }) {
  const dispatch = useDispatch();

  function onCheckBoxClick (item) {
    dispatch(updateStatus(item.id));
    dispatch(saveRequest(item));
  }

  function onDeleteButtonClick () {
    dispatch(deleteRequest(item.id))
  }

  function onEditButtonClick () {
    dispatch(edit(item))
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
