import React, { createContext, useContext, useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
import {nanoid} from 'nanoid'

const root = ReactDOM.createRoot(document.getElementById('root'));
const RootContext = createContext({})

function Provider({children}){
  //situation false = pending
  const [tasks, setTasks] = useState([]);
  const [searchTask, setSearchTask] = useState('');
  const [filteredTasks, dispatchFilterTasks ] = useReducer(filter, tasks);
  const [typeAction, setTypeAction] = useState('undone_tasks');

  function filter(state, action){        
      const options = {
          undone_tasks: () => tasks.filter(task => !task.done),
          done_tasks: () =>tasks.filter(task => task.done),
      }
      return options[action.type]();
  }

  useEffect(() => {
      dispatchFilterTasks({type:typeAction});
  }, [tasks, typeAction])

  return <RootContext.Provider value={{tasks, setTasks, searchTask, setSearchTask, typeAction, setTypeAction, filteredTasks, dispatchFilterTasks}}>
    {children}
  </RootContext.Provider>
}
export function useRootContext(){
  return useContext(RootContext)
}

root.render(
  <React.StrictMode>
    <Provider>
    <App />
    </Provider>
  </React.StrictMode>
);

