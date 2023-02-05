import React, {useState} from "react";

const initialListState = [
    {"title":"Effertzstead","status":true,"done":true,"id":"11"},
    {"title":"West Ignatiusmouth","status":true,"done":false,"id":"12"},
    {"title":"South Maynard","status":false,"done":false,"id":"13"},
    {"title":"North Highlands","status":false,"done":true,"id":"14"},
    {"title":"East Carissaport","status":false,"done":true,"id":"15"},
    {"title":"Georgehaven","status":true,"done":true,"id":"16"}
];

function App() {
    const [list, setUpdatedList] = useState(initialListState);
    let itemTitle;

    const toDoList = list.map(todo =>
      <li key={todo.id}>{todo.title}</li>);

    function onTitleClick(e) {
      itemTitle = e.target.value;
    }

    function onTitleSubmit(e) {
      e.preventDefault();

      const toDoItem = {
          title: itemTitle,
          status: false,
          done: false,
          id: Math.random().toString()
      }
      setUpdatedList([...list, toDoItem]);
    }

    return (
      <React.Fragment>
          <form onSubmit={onTitleSubmit}>
              <label htmlFor='title'>Title</label>
              <input type='text' id='title' onChange={onTitleClick}/>
          </form>
          <div className="To-do-list"></div>
        <ul>
            {toDoList}
        </ul>
      </React.Fragment>
    );
}

export default App;
