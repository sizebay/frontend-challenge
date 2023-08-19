import { useState } from "react";
import { Actions, AddBtn, AddTask, CompleteBtn, Container, Form, ItemText, Li, RemoveBtn, Ul } from "./style";
import { AiFillPlusCircle, AiFillMinusCircle, AiFillCheckCircle } from "react-icons/ai";

type TodoType = {
  id: number,
  text: string,
  isCompleted: boolean
}[]

export default function List(){

  const [todos, setTodo] = useState<TodoType>([]);
  const [item, setItem] = useState<string>('');
  const [expandItem, setExpandItem] = useState<number | null>();
  const [changeBackground, setChangeBackgroun] = useState<boolean>(false)

  function handleSubmit(event: any) {
    event.preventDefault();
    if(!item) return
    setTodo([...todos, {
      id: Math.floor(Math.random() * 10000),
      text: item,
      isCompleted: false,
    }])
    setItem('')
  }

  function handleAction(index: number){
    if(expandItem === index){
      setExpandItem(null)
      setChangeBackgroun(!changeBackground)
    }else{
      setExpandItem(index)
      setChangeBackgroun(!changeBackground)
    }
  }

  function completeItem(id: number) {
    const allTodos = [...todos]
    allTodos.map((todo) => todo.id === id? todo.isCompleted = !todo.isCompleted : todo)
    setTodo(allTodos)
    console.log('completado')
  }

  function handleRemoveItem(id: number) {
    const allTodos = [...todos]
    const filteredTodo = allTodos.filter(todo => 
      todo.id !== id ? todo : null)
    setTodo(filteredTodo)
  }

  return(
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <AddTask 
          type="text" 
          placeholder="Add new item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
  
        <AddBtn type="submit">
          <AiFillPlusCircle style={{color: '#fff', height: 20, width: 20}} />
        </AddBtn>
      </Form>
      <Ul>
        {todos.map((todo, index) => (
          <Li 
            key={todo.id} 
            onClick={() => handleAction(index)}
            bgColor={expandItem === index && changeBackground}
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
    </Container>
  )
}
