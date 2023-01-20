import React from 'react'

function TodoList({ todo, setTodos, todos }) {

  const deleteHandler = (e) => {
    e.preventDefault();

    const newList = todos.filter(d => d.id !== todo.id)
    setTodos(newList)
  }

  const doneHandler = (e) => {
    e.preventDefault();

    let newTodos = todos.map(d => {
      if (d.id === todo.id) {
        return {
          ...d,
          completed: !d.completed
        };
      }
      return d;
    })
    setTodos(newTodos);
  }

  return (
      <div className='form-input'>
        <input className='todo-item' defaultValue={todo.text} />
        <button onClick={doneHandler} >Done</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
  )
}

export default TodoList