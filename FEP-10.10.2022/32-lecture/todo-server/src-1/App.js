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

function Header(props) {
  return (
    <form onSubmit={() => {}}>
      <label htmlFor='title'>Title</label>
      <input type='text' id='title' onChange={() => {}}/>
    </form>
  );
}

function TodoList (props) {
  return (
    <ul>
      {initialTodoState.map(todo => <TodoListItem todo={todo} />)}
    </ul>
  );
}

function TodoListItem ({ todo }) {
  return (
    <li key={todo.id}>
      <input type='checkbox'/>
      {todo.title}
      <button>Edit</button>
      <button>Remove</button>
    </li>
  );
}

function Footer(props) {
  return (
    <div>
      <button>All</button>
      <button>Done</button>
      <button>Not done</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
