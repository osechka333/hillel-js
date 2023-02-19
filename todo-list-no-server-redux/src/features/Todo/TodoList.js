import TodoListItem from './TodoListItem'

export default function TodoList({ list }) {
  return (
    <ul>
      {list.map(item => (<TodoListItem key={item.id} item={item}/>))}
    </ul>
  );
}