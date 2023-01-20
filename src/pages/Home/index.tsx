import Checkbox from '../../components/Checkbox';
import Header from '../../components/Header';
import ProgressBar from '../../components/ProgressBar';
import Inputbox from '../../components/Inputbox';
import { AiFillPlusCircle, AiOutlineSearch } from 'react-icons/ai';
import ActionButton from '../../components/ActionButton';
import Task from '../../components/Task';
import { Container, FilterContainer, TaskList } from './style';
import { useTasks } from '../../shared/hooks/useTasks';
import { useState, useEffect, useRef } from 'react';
import { ITask } from '../../interfaces/ITask';

function Home() {
  const {tasks, create, edit} = useTasks();
  const [filteredTasks, setFilteredTasks] = useState<ITask[] | null>(tasks);

  const doneRef = useRef<HTMLInputElement>(null);
  const pendingRef = useRef<HTMLInputElement>(null);

  const handleFilterByContent = (content: string) => {
    const holder = tasks.filter((task) => task.content.includes(content));

    if (holder.length) {
      setFilteredTasks(holder);
    } else {
      alert('No items founded');
    }
  };

  const handleFilterByStatus = (name: string, status: boolean) => {
    let holder: ITask[] = [];
    if (name === 'done' && status) {
      holder = tasks.filter((task) => task.completed === true);
      if (pendingRef.current) {
        pendingRef.current.checked = false;
      }
    } else if (name === 'pending' && status) {
      holder = tasks.filter((task) => task.completed === false);
      if (doneRef.current) {
        doneRef.current.checked = false;
      }
    } else {
      holder = tasks;
    }
    setFilteredTasks(holder);
  };

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  return (
    <Container>
      <Header />
      <ProgressBar allTasks={100} completedTasks={50}/>
      <FilterContainer>
        <div className='input-box'>
          <Checkbox 
            text='Done'
            width='small'
            event={handleFilterByStatus}
            name="done"
            checkboxRef={doneRef}
          />
          <Checkbox 
            text='Pending'
            width='large'
            event={handleFilterByStatus}        
            name="pending"    
            checkboxRef={pendingRef}
          />
        </div>
        <Inputbox
          text='Search Items' 
          bold
          event={handleFilterByContent}
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
        {filteredTasks?.map(({completed, content,id}) => (
          <Task 
            key={id} 
            content={content} 
            id={id} 
            completed={completed}
            event={edit}
          />
        ))}
      </TaskList>
    </Container>
  );
}

export default Home;
