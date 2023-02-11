import { useEffect, useState } from 'react'
import { TodoApi } from '../api/TodoApi'

const initialTodoState = []
const DEFAULT_TODO = {
  title: '',
  done: false
}

export default function useTodo () {
  const [list, setList] = useState(initialTodoState)
  const [editTodo, setEditTodo] = useState(DEFAULT_TODO)

  useEffect(() => {
    TodoApi
      .getList()
      .then((listFromServer) => {
        setList(listFromServer)
      })
  }, [])

  function onTodoSubmit (todo) {
    if (editTodo.id) {
      const newList = list.map(todoItem => todoItem.id === editTodo.id ? todo : todoItem)

      TodoApi
        .update(editTodo.id, todo)
        .then(() => {
          setList(newList)
          setEditTodo(DEFAULT_TODO)
        })
    } else {
      TodoApi
        .create(todo)
        .then((newTodo) => {
          setList([...list, newTodo])
          setEditTodo(DEFAULT_TODO)
        })
    }
  }

  function onTodoRemove (id) {
    if (id) {
      const newList = list.filter(todoItem => todoItem.id !== id)

      TodoApi
        .delete(id)
        .then(() => {
          setList(newList)
        })
    }
  }

  function onTodoEdit (todo) {
    setEditTodo(todo)
  }

  function onCheckBoxClick (todo) {
    const updatedState = {done: !todo.done}
    TodoApi
        .update(todo.id, updatedState)
        .then(() => {
          const newList = list.map(todoItem => todoItem.id === todo.id
          ? {...todoItem, ...updatedState}
          : todoItem)
          setList(newList);
        })
  }

  return {
    list,
    editTodo,
    onTodoSubmit,
    onTodoRemove,
    onTodoEdit,
    onCheckBoxClick
  }
}
