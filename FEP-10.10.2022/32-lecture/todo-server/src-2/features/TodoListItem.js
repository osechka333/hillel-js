export default function TodoListItem ({ todo }) {
  return (
    <li>
      <input type='checkbox'/>
      {todo.title}
      <button>Edit</button>
      <button>Remove</button>
    </li>
  );
}
