import Header from './features/Header'
import TodoList from './features/TodoList'
import Footer from './features/Footer'
import useTodo from './hooks/useTodo'

function App() {
  const {
    list,
    editTodo,
    onTodoSubmit,
    onTodoRemove,
    onTodoEdit,
    onDoneChange,
  } = useTodo();

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
        onDoneChange={onDoneChange}
      />
      <Footer />
    </div>
  );
}

export default App;
