import Checkbox from '../components/Checkbox';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import Inputbox from '../components/Inputbox';
import { AiOutlineSearch } from 'react-icons/ai';
import ActionButton from '../components/ActionButton';
import Task from '../components/Task';

function Home() {
  return (
    <>
      <Header />
      <ProgressBar allTasks={100} completedTasks={50}/>
      <Checkbox text='Pending' width='large'/>
      <Inputbox
        text='Search Items' 
        icon={<ActionButton 
          icon={<AiOutlineSearch />}
        />} 
      />
      <Task content='Tarefa de teste'/>
    </>
  );
}

export default Home;
