import Modal from './components/Modal';

function App() {
  const currentDate = new Date();

  return (
    <div className="App">
     <Modal currentDate={currentDate}/>
    </div>
  );
}

export default App;
