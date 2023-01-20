
import { useState, useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import './App.css';
import Form from './components/Form';
import DateHeader from './components/DateHeader';


function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFiltered] = useState([]);
  const [filterClicked, setFilterClicked] = useState(false);
  const [progress, setProgres] = useState(0);

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  useEffect(() => {
    let percent = (todos.filter(d => d.completed === true).length / todos.length) * 100;
    setProgres(percent);

    console.log(percent)
  }, [progress, todos])

  const filterHandler = () => {
    switch (status) {
      case 'done':
        const done = todos.filter(d => d.completed === true);
        setFiltered(done);
        break;
      case 'pending':
        const pending = todos.filter(d => d.completed === false);
        setFiltered(pending);
        break;
      default:
        setFiltered(todos);
        break;
    }
  }

  return (
    <main>
      <div className="app">
        <DateHeader />
          <ProgressBar bgColor='#5DE290' borderRadius='1px' isLabelVisible={false} completed={progress} />
        <Form className='form'
          setInputText={setInputText}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
          filterClicked={filterClicked}
          setFilterClicked={setFilterClicked}
        />
      </div>
    </main>
  );
}

export default App;
