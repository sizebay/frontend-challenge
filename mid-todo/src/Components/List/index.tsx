import { FormEvent, useEffect, useState } from "react";
import { Actions, AddBtn, AddTask, ClearFilter, CompleteBtn, Container, FilterText, Form, ItemText, Li, RemoveBtn, Ul } from "./style";
import { AiFillPlusCircle, AiFillMinusCircle, AiFillCheckCircle } from "react-icons/ai";
import { useTodoProvider } from "../../Provider/Todo";

interface TaskType {
  id: number
  text: string
  isCompleted: boolean
}

export default function List(){

  const { todoTask, addTask, filteredTasks,
     filterType, isFilterOn, setFilteredTasks, 
     setFilterType, setIsFilterOn, setIsDone, setIsPending } = useTodoProvider();
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [item, setItem] = useState<string>('');
  const [expandItem, setExpandItem] = useState<number | null>();
  const [changeBackground, setChangeBackground] = useState<boolean>(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(!item) return
    addTask([...todoTask, {
      id: Math.floor(Math.random() * 10000),
      text: item,
      isCompleted: false,
    }])
    setItem('')
  }

  function handleAction(index: number){
    if(expandItem === index){
      setExpandItem(null)
      setChangeBackground(!changeBackground)
    }else{
      setExpandItem(index)
      setChangeBackground(!changeBackground)
    }
  }

  function completeItem(id: number) {
    const allTodos = [...todoTask]
    allTodos.map((todo) => todo.id === id? todo.isCompleted = !todo.isCompleted : todo)
    addTask(allTodos)
  }

  function handleRemoveItem(id: number) {
    const allTodos = [...todoTask]
    const filteredTodo = allTodos.filter(todo => 
      todo.id !== id ? todo : null)
      addTask(filteredTodo)
  }

  function handleClearFilter() {
    setFilteredTasks([...todoTask])
    setIsDone(false)
    setIsPending(false)
    setFilterType('')
    setIsFilterOn(false)
  }

  function handleBackgrounColor(position: number){
    if(expandItem === position && changeBackground){
      return '#FFFFFF'
    }else{
      return '#F4F4F4'
    }
  }
  
  useEffect(() => {
    if(filteredTasks.length > 0){
      setTasks(filteredTasks)
    }else{
      setTasks(todoTask)
    }
  },[todoTask, filteredTasks])

  return(
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <AddTask 
          type="text" 
          placeholder="Add new item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
          data-testid='new-task'
        />
  
        <AddBtn type="submit" data-testid='add-task-btn'>
          <AiFillPlusCircle style={{color: '#fff', height: 20, width: 20}} />
        </AddBtn>
      </Form>
      {
        isFilterOn?
        <FilterText>
          There are no items marked as {filterType}. 
          <ClearFilter onClick={handleClearFilter}>Clear filter here</ClearFilter>
           to see all items.
        </FilterText>
        
        :
        
        <Ul>
          {tasks.map((todo, index) => (
            <Li 
              key={todo.id} 
              onClick={() => handleAction(index)}
              bgcolor={handleBackgrounColor(index)}
              status={todo.isCompleted === true? 0.5 : 1}
            >
              <ItemText>
                {todo.text}
              </ItemText>
              {
                expandItem === index && 
                <Actions>
                  <RemoveBtn onClick={() => handleRemoveItem(todo.id)}>
                    <AiFillMinusCircle style={{color: '#fff', height: 20, width: 20}} />
                  </RemoveBtn>
                  <CompleteBtn onClick={() => completeItem(todo.id)}>
                    <AiFillCheckCircle style={{color: '#fff', height: 20, width: 20}} />
                  </CompleteBtn>
                </Actions>
              }
            </Li>
          ))}
        </Ul>
      }
    </Container>
  )
}
