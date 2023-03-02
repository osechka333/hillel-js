import Header from './features/Header'
import TodoList from './features/TodoList'
import Footer from './features/Footer'
import { useState } from 'react'

const initialTodoState = [
  {"title":"ipsam cupiditate repudiandae","status":true,"done":false,"id":"1"},
  {"title":"ratione nam alias","status":true,"done":false,"id":"2"},
  {"title":"atque non dolore","status":true,"done":true,"id":"3"},
  {"title":"in quos exercitationem","status":true,"done":false,"id":"4"},
  {"title":"quia perferendis ipsam","status":true,"done":false,"id":"5"},
  {"title":"commodi harum commodi","status":false,"done":false,"id":"6"},
  {"title":"ipsam occaecati nulla","status":false,"done":false,"id":"7"},
  {"title":"nemo soluta tempora","status":false,"done":false,"id":"8"},
];

const DEFAULT_TODO = {
  title: '',
  done: false,
};

function App() {
  const [list, setList] = useState(initialTodoState);
  const [editTodo, setEditTodo] = useState(DEFAULT_TODO);

  function onTodoSubmit (todo) {
    if (editTodo.id) { // edit
      const newList = list.map(todoItem => todoItem.id === editTodo.id ? todo : todoItem);

      setList(newList);
      setEditTodo(DEFAULT_TODO);
    } else { // create
      setList([...list, todo]);
      setEditTodo(DEFAULT_TODO);
    }
  }

  function onTodoRemove (id) {
    const newList = list.filter(todoItem => todoItem.id !== id);

    setList(newList);
  }

  function onTodoEdit (todo) {
    setEditTodo(todo);
  }

  return (
    <div className="App">
      <Header
        todo={editTodo}
        onTodoSubmit={onTodoSubmit}
      />
      <TodoList
        list={list}
        onTodoRemove={onTodoRemove}
        onTodoEdit={onTodoEdit}
      />
      <Footer />
    </div>
  );
}

export default App;
