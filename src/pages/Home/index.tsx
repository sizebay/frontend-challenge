import Checkbox from '../../components/Checkbox';
import Header from '../../components/Header';
import ProgressBar from '../../components/ProgressBar';
import Inputbox from '../../components/Inputbox';
import { AiFillPlusCircle, AiOutlineSearch } from 'react-icons/ai';
import ActionButton from '../../components/ActionButton';
import Task from '../../components/Task';
import { Container, FilterContainer, TaskList } from './style';
import { useTasks } from '../../shared/hooks/useTasks';

function Home() {
  const {tasks, create} = useTasks();

  return (
    <Container>
      <Header />
      <ProgressBar allTasks={100} completedTasks={50}/>
      <FilterContainer>
        <div className='input-box'>
          <Checkbox text='Done' width='small'/>
          <Checkbox text='Pending' width='large'/>
        </div>
        <Inputbox
          text='Search Items' 
          bold
          event={() => []}
          icon={<ActionButton 
            icon={
              <AiOutlineSearch />
            }
          />
          } 
        />
      </FilterContainer>
      <Inputbox
        text='Add new item' 
        iconBg
        event={create}
        icon={<ActionButton 
          icon={
            <AiFillPlusCircle />
          }
          color="#fff"
        />
        } 
      />
      <TaskList>
        {tasks.map(({completed, content,id}) => (
          <Task key={id} content={content} id={id} completed={completed}/>
        ))}
      </TaskList>
    </Container>
  );
}

export default Home;
