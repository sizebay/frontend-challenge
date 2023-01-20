import React, { useEffect } from 'react'
import TodoList from './TodoList';

function Form({ setInputText, inputText, todos, setTodos, setStatus, filteredTodos, setFilterClicked, filterClicked }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: (Math.random() * 1000) }
    ])
    setInputText("");
  }

  const statusHandler = (e) => {
    e.preventDefault();
    setStatus(e.target.value)
    setFilterClicked(!filterClicked);
  }

  let btnStyle = {
    color: filterClicked ? '#4DA6B3' : '#848484',
    border: filterClicked ? '1px solid #4DA6B3' : '1px solid #848484'
  }

  return (
    <div>
      <div className='filter'>
        <button onClick={statusHandler} className='filter-btn' style={btnStyle} value="done" >Done</button>
        <button onClick={statusHandler} className='filter-btn' style={btnStyle} value="pending" >Pending</button>
      </div>
      <form>
        <div className='todo-form' >
          <div className='form-input todo-add'>
            <input value={inputText} onChange={inputTextHandler} type="text" />
            <button onClick={submitTodoHandler} className='todo-button' type='submit'>Add</button>
          </div>
          <div className='todo-list'>
            {filteredTodos.map(todoItem => (
              <TodoList
                todo={todoItem}
                setTodos={setTodos}
                todos={todos}
              />
            )
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form