import Header from './features/Header'
import TodoList from './features/TodoList'
import FooterButtons from './features/FooterButtons'
import useTodo from './hooks/useTodo'

function App () {
  const {
    list,
    editTodo,
    onTodoSubmit,
    onTodoRemove,
    onTodoEdit,
    onCheckBoxClick
  } = useTodo()

  return (
    <div className='App'>
      <Header
        todo={editTodo}
        onTodoSubmit={onTodoSubmit}
      />
      <TodoList
        list={list}
        onTodoRemove={onTodoRemove}
        onTodoEdit={onTodoEdit}
        onCheckBoxClick={onCheckBoxClick}
      />
      <FooterButtons />
    </div>
  )
}

export default App
