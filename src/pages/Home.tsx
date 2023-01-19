import Checkbox from '../components/Checkbox';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import Inputbox from '../components/Inputbox';
import { AiOutlineSearch } from 'react-icons/ai';
import ActionButton from '../components/ActionButton';

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
    </>
  );
}

export default Home;
