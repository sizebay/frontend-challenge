import { Container, FilterBtn, FilterInput, Form } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs"
import { useTodoProvider } from "../../Provider/Todo";
import { FormEvent, useEffect, useState } from "react";

export default function Filter(){
  const [searchText, setSearchText] = useState<string>('');
  const {todoTask, setFilteredTasks, setFilterType, 
    setIsFilterOn, setIsDone, setIsPending, isFilterDone,
  isFilterPending} = useTodoProvider();
 
  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const filteredTasks = todoTask.filter((task) => {
      return task.text.match(searchText);
    });

    if(searchText.length > 0){
      setFilteredTasks([...filteredTasks])
    }else{
      setFilteredTasks([])
    }
  } 

  function handleFilterDone(){
    setIsPending(false)
    setIsDone(!isFilterDone)
    const fitleredDoneTask = todoTask.filter((task) => {
      return task.isCompleted
    })
    setFilteredTasks(fitleredDoneTask)
    if(fitleredDoneTask.length === 0){
      setFilterType('Done')
      setIsFilterOn(true)
    }
  }

  function handleFilterPending(){
    setIsDone(false)
    setIsPending(!isFilterPending)
    setFilterType('Pending')
    const fitleredPendingTask = todoTask.filter((task) => {
      return !task.isCompleted
    })
    setFilteredTasks(fitleredPendingTask)
    if(fitleredPendingTask.length === 0){
      setFilterType('Pending')
      setIsFilterOn(true)
    }
  }

  useEffect(() => {
    if(isFilterDone === false && isFilterPending === false){
      setFilteredTasks([...todoTask])
      setFilterType('')
      setIsFilterOn(false)
    }

  }, [isFilterDone, todoTask, setFilteredTasks, isFilterPending, setIsFilterOn, setFilterType])

  return(
    <Container>
      <div>
        <FilterBtn 
          onClick={handleFilterDone}
          isActive={isFilterDone}
        >
          {isFilterDone === true &&
            <BsCheck2 />
          }
          Done
        </FilterBtn>
        <FilterBtn 
          onClick={handleFilterPending}
          isActive={isFilterPending}
        >
          {isFilterPending === true &&
            <BsCheck2 />
          }
          Pending
        </FilterBtn>
      </div>
      <Form onSubmit={(e) => handleSearch(e)}>
        <AiOutlineSearch style={{
          color: '#333',
          cursor: 'pointer',
          height: 20,
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 20
        }}/>
        <FilterInput 
          name="search" 
          placeholder="Search" 
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      </Form>
    </Container>
  )
}
