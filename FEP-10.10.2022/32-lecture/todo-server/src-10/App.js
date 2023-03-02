import Header from './features/Header'
import TodoList from './features/TodoList'
import Footer from './features/Footer'
import { useEffect, useState } from 'react'
import TodoApi from './api/TodoApi';

const initialTodoState = [];

const DEFAULT_TODO = {
  title: '',
  done: false,
};

function App() {
  const [list, setList] = useState(initialTodoState);
  const [editTodo, setEditTodo] = useState(DEFAULT_TODO);

  useEffect(() => {
    TodoApi
      .getList()
      .then((listFromServer) => {
        setList(listFromServer);
      })
  }, [])

  function onTodoSubmit (todo) {
    if (editTodo.id) { // edit
      const newList = list.map(todoItem => todoItem.id === editTodo.id ? todo : todoItem);

      TodoApi
        .update(editTodo.id, todo)
        .then(() => {
          setList(newList);
          setEditTodo(DEFAULT_TODO);
        })
    } else { // create
      TodoApi
        .update(todo)
        .then((newTodo) => {
          setList([...list, newTodo]);
          setEditTodo(DEFAULT_TODO);
        })
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
